import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GuardOperatorAnd from "./components/GuardOperatorAnd";
import Ternary from "./components/Ternary";
import GoodOldIfElse from "./components/GoodOldIfElse";

function App() {
  return (
    <div className="App">
      <h1>If else</h1>
      <GoodOldIfElse foo={false} />
      <h1>Ternary</h1>
      <Ternary foo={true} />
      <h1>Logical guard operator</h1>
      <GuardOperatorAnd foo={true} />
    </div>
  );
}

export default App;
