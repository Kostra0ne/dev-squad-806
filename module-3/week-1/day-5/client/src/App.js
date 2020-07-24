import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import FormPlant from "./views/FormPlant";
// import FormEditPlant from "./views/FormEditPlant";
import Page404 from "./views/Page404";
import Home from "./views/Home";
import Plants from "./views/Plants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/plants">
          Plants
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/plants" component={Plants} />
        <Route
          exact
          path="/plants/:mode(create|edit)/:id?"
          component={FormPlant}
        />
        {/* <Route exact path="/plants/edit/:id" component={FormEditPlant} /> */}
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
