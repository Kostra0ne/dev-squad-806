import React, { useState } from "react";
// import ClassCounter from "Components/Class/ClassCounter";
import HookCounter from "Components/Hooks/HookCounter";
import Container from "Components/Container";
import Button from "Components/Button";

const Intro = (props) => {
  const [toggleClass, setToggleClass] = useState(true);
  const [toggleHook, setToggleHook] = useState(true);

  function handleClassToggle() {
    setToggleClass(!toggleClass);
  }

  function handleHookToggle() {
    setToggleHook(!toggleHook);
  }

  return (
    <Container className="text-align-center">
      <h1 className="title m-2">Intro Page</h1>
      <div className="m-2">
        <Button
          type={toggleClass ? "danger-secondary" : "success"}
          className="m-2"
          handleClick={handleClassToggle}
        >
          {!toggleClass ? "Display class" : "Hide class"}
        </Button>
        <Button
          type={toggleHook ? "danger-secondary" : "success"}
          className="m-2"
          handleClick={handleHookToggle}
        >
          {!toggleHook ? "Display hook" : "Hide hook"}
        </Button>
      </div>

      <div className="d-flex">
        {/* {toggleClass && <ClassCounter />} */}
        {toggleHook && <HookCounter />}
      </div>
    </Container>
  );
};

export default Intro;
