import React, { Component } from "react";

export class CompA extends Component {
  render() {
    return (
      <div>
        <h1>Component with only props</h1>
        {this.props.users.map((user) => {
          return <div>{user}</div>;
        })}
      </div>
    );
  }
}

export default CompA;
