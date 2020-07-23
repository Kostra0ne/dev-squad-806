import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      message: "",
    };
  }

  componentDidMount() {
    console.log("I am mounted...");
    // setTimeout(() => {
    //   this.setState({ time: this.state.time + 1 });
    // }, 10000);
    this.timeOutId = setTimeout(() => {
      this.setState({ message: "Fooo" });
    }, 5000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    // clearInterval(this.intervalId);
    clearTimeout(this.timeOutId);
    console.log("I am being unmounted");
  }

  render() {
    console.log("I am being rendered");
    return (
      <div>
        <h1>Hello world</h1>
        <h2>Timer {this.state.time}</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ClassComponent;
