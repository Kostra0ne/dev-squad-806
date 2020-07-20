import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toto from "./Toto";
import ClassComponent from "./ClassComponent";

function App() {
  const name = "Toto";

  function sayHello(username) {
    return "Hello " + username;
  }

  let x = 0;
  for (let i = 0; i < 10; i++) {
    x++;
  }

  const array = [];

  const element = <div>Footer</div>;

  return (
    <div className="App">
      <h1>{name}</h1>

      <h2>Inline styling</h2>

      <div
        style={{
          color: "black",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius: "8px",
          margin: "10px",
        }}
      >
        <p>In box</p>
      </div>

      <div className="toto"></div>
      {1 + 2}

      <p>{sayHello("Bob")}</p>

      {element}

      <p>This is x: {x}</p>

      <h2>Not rendered values: </h2>
      <p>Not rendered: {undefined}</p>
      <p>Not rendered: {null}</p>
      <p>Rendred: {true}</p>
      <p>Not rendered: {false}</p>

      <h2>Rendered values</h2>
      <p>Rendred: {"Toto"}</p>
      <p>Rendred: {0}</p>
      <p>Rendred: {1 - 1}</p>

      <p>{array.length}</p>

      <h2>Importing another component</h2>
      <Toto />

      <ClassComponent />

      <img src="/logo192.png" />
    </div>
  );
}

export default App;
