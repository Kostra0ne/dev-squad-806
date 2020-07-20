import React from "react";
import CompB from "./CompB";

const CompA = (props) => {
  console.log(props);
  return <CompB weather={props.weather} />;
};

export default CompA;
