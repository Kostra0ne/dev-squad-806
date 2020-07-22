import React from "react";

class FilterComponent extends React.Component {
  handleClick = (team) => {
    // this.setState({ selectedTeam: team });
    this.props.callback(team);
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={(event) => this.handleClick(null)}
          className="btn-filter"
        >
          All
        </button>
        <button
          onClick={(event) => this.handleClick("honey-badger")}
          className="btn-filter"
        >
          honey badgers
        </button>
        <button
          onClick={(event) => this.handleClick("racoon")}
          className="btn-filter"
        >
          racoons
        </button>
      </React.Fragment>
    );
  }
}

export default FilterComponent;
