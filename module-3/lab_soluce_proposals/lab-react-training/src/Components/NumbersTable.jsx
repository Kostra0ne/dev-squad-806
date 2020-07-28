import React from "react";
import "../styles/NumbersTable.css";

function NumbersTable({ limit }) {
  return (
    <div className="NumbersTable">
      {new Array(limit).fill(0).map((cell, index) => (
        <div
          key={index}
          className="cell"
          style={{ backgroundColor: index % 2 === 0 ? "red" : "white" }}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
