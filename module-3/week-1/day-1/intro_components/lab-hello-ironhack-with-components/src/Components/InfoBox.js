import React from "react";

const InfoBox = (props) => {
  return (
    <div className="InfoBox">
      <img className="image" src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.subtext}</p>
    </div>
  );
};

export default InfoBox;
