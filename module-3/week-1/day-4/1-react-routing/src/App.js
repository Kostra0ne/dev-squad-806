import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NavMain from "./NavMain";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavMain />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <footer>this is footer</footer>
    </div>
  );
}

export default App;
