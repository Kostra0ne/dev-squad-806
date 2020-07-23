import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

class Pokemons extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    apiHandler
      .getAllPokemons()
      .then((apiRes) => {
        this.setState({ pokemons: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  render() {
    return (
      <div className="Pokemons">
        {this.state.pokemons.map((pokemon) => {
          return (
            <Link key={pokemon.id} to={"/pokemons/" + pokemon.id}>
              <p>{pokemon.name}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Pokemons;
