import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
    };
  }

  componentDidMount() {
    const pokemonId = this.props.match.params.pokemonId;
    console.log(pokemonId);
    apiHandler
      .getOnePokemon(pokemonId)
      .then((res) => {
        this.setState({ pokemon: res.data });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   prevProps.match.params.pokemonId,
    //   this.props.match.params.pokemonId
    // );
    // console.log("wooohoooo infinite looop");
    const pokemonId = this.props.match.params.pokemonId;

    if (
      this.props.match.params.pokemonId !== prevProps.match.params.pokemonId
    ) {
      axios
        .get("https://ironhack-pokeapi.herokuapp.com/pokemon/" + pokemonId)
        .then((res) => {
          this.setState({
            pokemon: res.data,
          });
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    if (this.state.pokemon === null) return <div>Loading...</div>;

    return (
      <div>
        <h1>Pokemon detail</h1>
        <p>{this.state.pokemon.ename}</p>
        <img
          style={{ width: "100px" }}
          src={this.state.pokemon.picture}
          alt=""
        />
        <Link to={`/pokemons/${this.state.pokemon.id + 1}`}>Next pokemon</Link>
      </div>
    );
  }
}

export default PokemonDetails;
