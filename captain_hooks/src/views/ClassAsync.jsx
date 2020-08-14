import React, { Component } from "react";
import ClassListPokemon from "Components/Class/ClassListPokemon";
import ClassPokemon from "Components/Class/ClassPokemon";
import Container from "Components/Container";
import "styles/HookAsync.scss";

class UsingAsync extends Component {
  state = {
    selectedPokemon: null,
  };

  handleSelectedPokemon = (id) => {
    this.setState({ selectedPokemon: id });
  };

  render() {
    return (
      <Container>
        <h1 className="title text-align-center">Lets get some Pokemons !</h1>
        <div className="Pokemon-grid">
          <ClassListPokemon pokemonHandler={this.handleSelectedPokemon} />
          {this.state.selectedPokemon !== null && (
            <ClassPokemon selectedPokemon={this.state.selectedPokemon} />
          )}
        </div>
      </Container>
    );
  }
}

export default UsingAsync;
