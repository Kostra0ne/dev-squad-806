import React from "react";
import CompC from "./CompC";

const CompB = (props) => {
  console.log(props, "props in comp B");
  return (
    <div>
      <CompC toto={props.weather} />
    </div>
  );
};

export default CompB;
