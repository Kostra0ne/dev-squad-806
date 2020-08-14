import React, { useState } from "react";
import HookPokemon from "Components/Hooks/HookPokemon";
import HookListPokemon from "Components/Hooks/HookListPokemon";
import Container from "Components/Container";
import "styles/HookAsync.scss";

const HookAsync = () => {
  const [pokemonId, setPokemonId] = useState(null);

  const handleSelectedPokemon = (id) => {
    setPokemonId(id);
  };

  return (
    <Container>
      <h2 className="title text-align-center">Lets get some Pokemons !</h2>
      <section className="Pokemon-grid">
        <HookListPokemon pokemonHandler={handleSelectedPokemon} />
        {pokemonId !== null && <HookPokemon selectedPokemon={pokemonId} />}
      </section>
    </Container>
  );
};

export default HookAsync;
