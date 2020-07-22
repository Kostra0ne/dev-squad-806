import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompB from "./components/CompB";
import CompA from "./components/CompA";

class App extends React.Component {
  state = {
    users: ["Foo", "Bar", "Baz"],
  };

  inputRef = React.createRef(null);

  addUser = () => {
    // console.log(this.inputRef.current.value);
    this.setState({
      users: [...this.state.users, this.inputRef.current.value],
    });
  };

  render() {
    return (
      <div className="App">
        <input ref={this.inputRef} type="text" />
        <button onClick={this.addUser}>Add User</button>
        <CompA users={this.state.users} />
        <CompB users={this.state.users} />
      </div>
    );
  }
}

export default App;
