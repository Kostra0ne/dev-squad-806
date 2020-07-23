import React, { Component } from "react";
import axios from "axios";

class PokemonDetail extends Component {
  state = {
    pokemon: null,
  };

  fetchPokemon() {
    axios
      .get(
        "https://ironhack-pokeapi.herokuapp.com/pokemon/" +
          this.props.selectedPokemon
      )
      .then((apiRes) => {
        this.setState({ pokemon: apiRes.data });
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedPokemon !== prevProps.selectedPokemon) {
      this.fetchPokemon();
    }
  }

  render() {
    if (this.state.pokemon === null) return <div>Loading...</div>;

    return (
      <div>
        <img src={this.state.pokemon.picture} alt="" />
        <p>{this.state.pokemon.name}</p>
        <p>{this.state.pokemon.jname}</p>
      </div>
    );
  }
}

export default PokemonDetail;
