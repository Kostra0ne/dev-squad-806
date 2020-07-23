import React, { Component } from "react";
import axios from "axios";
import PokemonDetail from "./PokemonDetail";

class Pokemons extends Component {
  state = {
    pokemons: [],
    error: false,
    selectedPokemon: null,
  };

  componentDidMount() {
    axios
      .get("https://ironhack-pokeapi.herokuapp.com/pokemon")
      .then((apiRes) => {
        this.setState({ pokemons: apiRes.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("I am being updated...");
    // if (this.state.selectedPokemon !== null) {
    //   axios
    //     .get(
    //       "https://ironhack-pokeapi.herokuapp.com/pokemon/" +
    //         this.state.selectedPokemon
    //     )
    //     .then((apiRes) => {
    //       this.setState({ pokemon: apiRes.data });
    //     })
    //     .catch((apiError) => {
    //       console.log(apiError);
    //     });
    // }
  }

  handleSelect = (pokemonId) => {
    if (this.state.selectedPokemon !== pokemonId) {
      this.setState({ selectedPokemon: pokemonId });
    }
  };

  render() {
    return (
      <div>
        <h1>Pokemons</h1>
        {this.state.error && <div>And error occured calling the pokemons</div>}
        <div style={{ display: "flex" }}>
          <div>
            {this.state.pokemons.map((pokemon) => (
              <p key={pokemon.id} onClick={() => this.handleSelect(pokemon.id)}>
                {pokemon.name}
              </p>
            ))}
          </div>

          {this.state.selectedPokemon !== null && (
            <PokemonDetail selectedPokemon={this.state.selectedPokemon} />
          )}
        </div>
      </div>
    );
  }
}

export default Pokemons;
