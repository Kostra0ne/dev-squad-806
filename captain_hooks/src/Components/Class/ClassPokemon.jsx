import React, { Component } from "react";
import CardPokemon from "Components/CardPokemon";
import pokemonAPI from "api/pokemonAPI";

class ClassPokemon extends Component {
  state = {
    pokemon: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    pokemonAPI
      .getOne(this.props.selectedPokemon)
      .then((data) => {
        //Emulating crappy internet in order to show Loading...
        this.timeoutId = setTimeout(() => {
          this.setState({ pokemon: data, isLoading: false });
        }, 1000);
      })
      .catch((err) => {
        this.setState({ isLoading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedPokemon !== this.props.selectedPokemon) {
      console.log("Wohooooooooo");
      this.setState({ isLoading: true });
      pokemonAPI
        .getOne(this.props.selectedPokemon)
        .then((data) => {
          //Emulating crappy internet in order to show Loading...
          this.timeoutId = setTimeout(() => {
            this.setState({ pokemon: data, isLoading: false });
          }, 1000);
        })
        .catch((err) => {
          this.setState({ isLoading: false });
        });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log(this.props.selectedPokemon);
    if (this.state.isLoading) return null;
    if (!this.state.pokemon) return <div>404 No pokemon here.</div>;

    return (
      <div>
        <CardPokemon pokemon={this.state.pokemon} />;
      </div>
    );
  }
}

export default ClassPokemon;
