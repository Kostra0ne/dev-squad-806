import React from "react";

class ClassComponent extends React.Component {
  sayHello(username) {
    return <div>Hello {username}</div>;
  }

  render() {
    let p = "Hello";
    return (
      <div>
        In class component {p}
        <span>{this.sayHello("Alice")}</span>
      </div>
    );
  }
}

export default ClassComponent;
