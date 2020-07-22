import React from "react";

function Search({ callback }) {
  return (
    <input
      className="style-input"
      type="text"
      onChange={callback}
      placeholder="Search..."
    />
  );
}

export default Search;
