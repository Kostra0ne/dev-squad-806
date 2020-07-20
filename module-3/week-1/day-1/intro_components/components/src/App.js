import React from "react";
import UserCard from "./Components/UserCard";
import CompA from "./Components/CompA";
import ClassComponent from "./Components/ClassComponent";
import "./App.css";

function App() {
  let weather = "Sunny";

  return (
    <div className="App">
      <UserCard
        firstName="Aude"
        lastName="Richon"
        age={18}
        backgroundColor="red"
        className="highlighted"
      />
      <UserCard
        firstName="Toto"
        lastName="Johnson"
        borderRadius="20px"
        age={12}
        backgroundColor="dodgerblue"
      />
      <CompA weather={weather} />

      <ClassComponent toto={{ name: "Toto" }} />

      <ClassComponent toto={{ name: "Hello" }}>
        <h1>Hello i'm child</h1>
        <h2>Hello i'm another title</h2>
        <p>Im subtext</p>
      </ClassComponent>
    </div>
  );
}

export default App;
