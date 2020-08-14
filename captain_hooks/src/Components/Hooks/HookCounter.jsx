import React, { useState, useEffect } from "react";
import Card, { Title } from "Components/Card";
import Button from "Components/Button";

const HookCounter = (props) => {
  const [counter, setCounter] = useState(0);

  function handleDecrement() {
    setCounter((oldState) => {
      return oldState - 1;
    });
  }

  function handleIncrement() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log("Hello world");
  }, [counter]);

  useEffect(() => {
    console.log("Hello world");
  });

  // console.log("Before effect !");

  return (
    <Card className="text-align-center m-2" theme="dark">
      <Title className="h3">Hook Counter</Title>

      <hr />
      <div>
        <Button type="danger" className="m-2" handleClick={handleDecrement}>
          Decrement
        </Button>

        <Button type="primary" className="m-2" handleClick={handleIncrement}>
          Increment
        </Button>
      </div>

      <h3>Counter value:</h3>

      <p className="hero">{counter}</p>
    </Card>
  );
};

export default HookCounter;
