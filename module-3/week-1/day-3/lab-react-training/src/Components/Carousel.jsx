import React, { Component } from "react";

class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  decrement = (event) => {
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: this.props.imgs.length - 1 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  };

  increment = (event) => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  render() {
    const { imgs } = this.props;

    return (
      <div>
        <button
          // disabled={this.state.currentIndex === 0}
          onClick={this.decrement}
        >
          Previous
        </button>
        <img src={imgs[this.state.currentIndex]} alt="" />
        <button
          // disabled={this.state.currentIndex >= imgs.length - 1}
          onClick={this.increment}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Carousel;
