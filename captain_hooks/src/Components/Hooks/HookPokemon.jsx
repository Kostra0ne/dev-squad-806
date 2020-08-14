import React, { useState, useEffect } from "react";
import CardPokemon from "Components/CardPokemon";
import pokemonAPI from "api/pokemonAPI";

const HookPokemon = ({ selectedPokemon }) => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pokemonAPI
      .getOne(selectedPokemon)
      .then((data) => {
        setLoading(false);
        setPokemon(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [selectedPokemon]);

  if (isLoading) return null;
  return <CardPokemon pokemon={pokemon} />;
};

export default HookPokemon;
