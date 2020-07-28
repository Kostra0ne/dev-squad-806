import React from "react";
import "../styles/random.css";

function randomBetween2Values(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Random({ min, max }) {
  return (
    <div className="card-random">
      Random value between {min} and {max} =>{" "}
      {randomBetween2Values(min, max + 1)}
    </div>
  );
}

export default Random;
