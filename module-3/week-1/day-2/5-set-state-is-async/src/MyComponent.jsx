import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    count: 1,
    searchValue: "Hello world",
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("In callback", this.state.count);
    });
    console.log("Not in call back", this.state.count);
    // this.setState(function (prevState) {
    //   console.log(prevState);
    //   return { count: prevState.count + 1 };
    // });
  };

  render() {
    return (
      <div>
        <h1>More on setState !</h1>
        <p>
          setState is asynchronous, which means it doesn't update the state
          directly, <br />
          React chooses the most suitable moment to update the state. <br />
          setState has 2 ways of changing the state, either you pass the key
          with the new value <br />
          you wish to update, either you can pass a function that passes you the
          previous state object <br />
          it is then your responsibility to update the keys accordingly.
        </p>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
