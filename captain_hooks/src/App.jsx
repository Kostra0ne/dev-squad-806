import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "Components/NavMain";
import Home from "views/Home";
import ClassAsync from "views/ClassAsync";
import HookAsync from "views/HookAsync";
import Intro from "views/Intro";
import FormExample from "views/FormExample";
import Dependencies from "Components/Hooks/Dependencies";
import "styles/App.scss";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/class-async" component={ClassAsync} />
        <Route path="/hook-async" component={HookAsync} />
        <Route path="/dependencies" component={Dependencies} />
        <Route path="/form" component={FormExample} />
      </Switch>
    </div>
  );
}

export default App;
