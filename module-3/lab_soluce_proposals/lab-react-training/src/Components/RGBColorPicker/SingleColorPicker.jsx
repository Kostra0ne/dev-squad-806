import React from "react";

function SingleColorPicker({ color, value, onChange }) {
  const rgbColor = `rgb(${color === "r" ? value : 0}, ${
    color === "g" ? value : 0
  },${color === "b" ? value : 0})`;

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: rgbColor,
          width: "50px",
          height: "50px",
          border: "1px solid black",
        }}
      ></div>
      <input
        onChange={(event) =>
          onChange(
            `${color === "r" ? "rValue" : color === "g" ? "gValue" : "bValue"}`,
            event.target.value
          )
        }
        type="number"
        min={0}
        max={255}
        value={value}
      />
    </div>
  );
}

export default SingleColorPicker;
