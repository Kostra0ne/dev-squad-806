import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <React.Fragment>
        Hello class component {this.props.toto.name}
        {this.props.children}
        <div className="left">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default ClassComponent;
