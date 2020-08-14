import React from "react";
import "styles/CardPokemon.scss";

const CardPokemon = ({ pokemon }) => {
  if (!pokemon) return null;

  const { base } = pokemon;

  const stats = Object.keys(base).map((key) => (
    <li key={key}>
      {key}: {base[key]}
    </li>
  ));

  return (
    <div className="CardPokemon text-align-center">
      <img src={pokemon.picture} alt={pokemon.ename} />
      <h4 style={{ fontSize: "2rem" }}>
        {pokemon.ename} |{" "}
        <span className="CardPokemon__jname">{pokemon.jname}</span>
      </h4>
      <ul className="CardPokemon__stats">{stats}</ul>
    </div>
  );
};

export default CardPokemon;
