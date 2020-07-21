import React from "react";

const GuardOperatorAnd = ({ foo }) => {
  return (
    <React.Fragment>
      {foo && <h1>Conditions is true</h1>}
      {!foo && <h1>Condition is false</h1>}
    </React.Fragment>
  );
};

export default GuardOperatorAnd;
