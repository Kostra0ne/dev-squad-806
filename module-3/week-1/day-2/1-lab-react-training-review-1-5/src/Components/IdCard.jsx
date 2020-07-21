import React from "react";
import "../styles/IdCard.css";
import formatDate from "../utils/formatDate";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="CardId">
      <div>
        <img src={picture} alt={"Picture of " + lastName} />
      </div>
      <div className="content">
        <p>
          <b> Firstname:</b>
          {firstName}
        </p>
        <p>
          <b> LastName:</b>
          {lastName}
        </p>
        <p>
          <b>Gender:</b>
          {gender}
        </p>
        <p>
          <b> Height:</b>
          {height / 100 + "cm"}
        </p>
        <p>
          <b> Birth:</b>
          {formatDate(birth)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
