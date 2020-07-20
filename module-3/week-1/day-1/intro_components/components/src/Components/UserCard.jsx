import React from "react";
import "../UserCard.css";

const UserCard = (props) => {
  return (
    <div
      className={`UserCard  ${props.className ? props.className : ""}`}
      style={{
        borderRadius: !props.borderRadius ? "50%" : props.borderRadius,
        border: "1px solid black",
        margin: "20px",
        backgroundColor: props.backgroundColor,
      }}
    >
      <p className="name">{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default UserCard;
