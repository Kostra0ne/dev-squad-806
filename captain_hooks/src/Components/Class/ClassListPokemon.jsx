import React, { Component } from "react";
import pokemonAPI from "api/pokemonAPI";
import "styles/CardListPokemon.scss";

class ClassListPokemon extends Component {
  state = {
    pokemons: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    pokemonAPI
      .getAll()
      .then((data) => {
        //Emulating crappy internet in order to show Loading...
        this.timeoutid = setTimeout(() => {
          if (this.timeoutid) {
            this.setState({ pokemons: data, isLoading: false });
            clearTimeout(this.timeoutid);
          }
        }, 1000);
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutid);
  }

  render() {
    const pokemonList = this.state.pokemons.map((pokemon, index) => (
      <div
        className="CardListPokemon"
        onClick={() => this.props.pokemonHandler(pokemon.id)}
        key={pokemon.name}
      >
        <div className="CardListPokemon__image-container">
          <img
            className="CardListPokemon__image"
            src={pokemon.picture}
            alt=""
          />
        </div>
        <h3 className="CardListPokemon__name">{pokemon.name}</h3>
      </div>
    ));

    if (this.state.isLoading) return <div>Loading...</div>;
    return <div className="ScrollMenu">{pokemonList}</div>;
  }
}

export default ClassListPokemon;
