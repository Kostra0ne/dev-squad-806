import React from "react";

const Home = (props) => {
  console.log(props, "props in home");
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome {props.currentUser.username}</h2>
      <p className="paragraph">
        In order to enable routing in a React application we need to install a
        library called <strong>React router dom</strong> <br />
        <code>npm i react-router-dom</code> <br />
        You need to wrap your <code>App</code> component around the{" "}
        <code>BrowserRouter</code>
        component.
        <br />
        Every component rendered by a <code>Route</code> component will receive
        the routing object.
      </p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default Home;
