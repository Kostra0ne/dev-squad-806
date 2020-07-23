import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = ({ currentUser }) => {
  return (
    <nav className="nav-bar">
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-between",
        }}
      >
        <li>{currentUser.username}</li>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/pokemons">Pokemons</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
