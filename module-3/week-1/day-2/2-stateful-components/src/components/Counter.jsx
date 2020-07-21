import React, { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       count: 0,
  //     };

  //     // this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 2 });
  };

  render() {
    console.log("rendered");
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
