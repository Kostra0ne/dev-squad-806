import React from "react";

const GoodOldIfElse = ({ foo }) => {
  if (foo) {
    return <div>Condition is true</div>;
  } else {
    return <div>Condition is false</div>;
  }
};

export default GoodOldIfElse;
