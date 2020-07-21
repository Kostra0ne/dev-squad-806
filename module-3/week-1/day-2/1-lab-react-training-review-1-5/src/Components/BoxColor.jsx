import React from "react";
import "../styles/BoxColor.css";

function formatToHex(r, g, b) {
  let rHex = r < 10 ? "0" + r.toString(16) : r.toString(16);
  let gHex = g < 10 ? "0" + g.toString(16) : g.toString(16);
  let bHex = b < 10 ? "0" + b.toString(16) : b.toString(16);
  return "#" + rHex + gHex + bHex;
}

function isLight(r, g, b) {
  let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance > 0.5) {
    return false;
  } else {
    return true;
  }
}

function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    color: isLight(r, g, b) ? "white" : "black",
  };

  return (
    <div style={divStyle} className="CardBox">
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{formatToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
