import React, { Component } from "react";
import Card, { Title } from "Components/Card";
import Button from "Components/Button";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleIncrement = (event) => {
    this.setState({ counter: this.state.counter + 1 });
    this.setState((toto) => {
      return {
        counter: toto.counter + 1,
      };
    });
  };

  handleDecrement = (event) => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <Card className="text-align-center m-2" theme="dark">
        <Title className="h3">Class Counter</Title>

        <hr />

        <div>
          <Button
            type="danger"
            className="m-2"
            handleClick={this.handleDecrement}
          >
            Decrement
          </Button>
          <Button
            type="primary"
            className="m-2"
            handleClick={this.handleIncrement}
          >
            Increment
          </Button>
        </div>

        <h3>Counter value:</h3>

        <p className="hero">{this.state.counter}</p>
      </Card>
    );
  }
}

export default ClassCounter;
