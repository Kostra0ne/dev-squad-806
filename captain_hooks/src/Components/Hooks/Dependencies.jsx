import React, { useState, useEffect } from "react";
import Container from "Components/Container";
import Button from "Components/Button";
import { useTimer } from "hooks/useForm";

const Dependencies = (props) => {
  const timer = useTimer(1000);
  const timer2 = useTimer(5000);

  return (
    <Container>
      <h1>Timer value: {timer}</h1>
      <h1>Timer2 value: {timer2}</h1>
    </Container>
  );
};

export default Dependencies;
