import React, { Component } from "react";

export class CompB extends Component {

  render() {
    return (
      <div>
        <h1>Component with props as state </h1>
        {this.props.users.map((user) => {
          return <div>{user}</div>;
        })}
      </div>
    );
  }
}

export default CompB;
