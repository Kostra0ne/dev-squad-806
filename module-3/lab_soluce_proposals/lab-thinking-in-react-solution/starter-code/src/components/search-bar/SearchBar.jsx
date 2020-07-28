import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    const { stocked, searchValue } = this.props;
    return (
      <div>
        <p>Search</p>
        <input
          className="input-text"
          type="text"
          name="name"
          value={searchValue}
          onChange={this.props.handleSearch}
        />
        <div>
          <input
            type="checkbox"
            name="stocked"
            id="stocked"
            checked={stocked}
            onChange={this.props.handleChangeCheckbox}
          />
          <label htmlFor="stocked">Only Show Products on Stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
