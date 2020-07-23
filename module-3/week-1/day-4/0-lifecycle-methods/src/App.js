import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./ClassComponent";
import Pokemons from "./components/Pokemons";

class App extends React.Component {
  state = {
    displayClass: false,
  };
  handleDisplay = (event) => {
    this.setState({ displayClass: !this.state.displayClass });
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <button onClick={this.handleDisplay}>Display Class</button>
          {this.state.displayClass && <ClassComponent />} */}
          <Pokemons />
        </header>
      </div>
    );
  }
}

export default App;
