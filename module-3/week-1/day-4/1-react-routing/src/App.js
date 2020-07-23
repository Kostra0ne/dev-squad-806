import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavMain from "./components/NavMain";
import Pokemons from "./pages/Pokemons";
import PokemonDetails from "./pages/PokemonDetails";

import "./App.css";

class App extends React.Component {
  state = {
    user: {
      username: "Toto",
    },
  };

  render() {
    return (
      <div className="App">
        <NavMain currentUser={this.state.user} />
        <main className="content">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                console.log(props, "props in app");
                return <Home {...props} currentUser={this.state.user} />;
              }}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/pokemons" component={Pokemons} />
            <Route path="/pokemons/:pokemonId" component={PokemonDetails} />
          </Switch>
        </main>

        <footer>this is footer</footer>
      </div>
    );
  }
}

export default App;
