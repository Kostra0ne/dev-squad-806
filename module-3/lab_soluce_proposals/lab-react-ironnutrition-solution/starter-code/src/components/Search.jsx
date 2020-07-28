import React from "react";

class Search extends React.Component {
  state = {
    input: "",
  };

  handleSearch = (event) => {
    const { value } = event.target;
    this.props.filterFood(value); // Filter happens in the parent component.
    this.setState({
      input: value,
    }); // The input is a controlled element, so we change the state in order to control the input value.
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleSearch}
          placeholder="search..."
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Search;
