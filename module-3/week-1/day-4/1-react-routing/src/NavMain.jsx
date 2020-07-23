import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav
      className="nav-bar"
      style={{
        display: "flex",
        listStyleType: "none",
        justifyContent: "space-between",
      }}
    >
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
    </nav>
  );
};

export default NavMain;
