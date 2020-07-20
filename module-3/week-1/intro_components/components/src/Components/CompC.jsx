import React from "react";

const CompC = (props) => {
  console.log(props, "props in comp c");
  return (
    <div style={{ color: "white" }}>
      What is the weather ? Its {props.toto}
    </div>
  );
};

export default CompC;
