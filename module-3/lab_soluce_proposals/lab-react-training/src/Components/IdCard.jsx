import React from "react";
import "../styles/idCard.css";

function formatDate(date) {
 return date.toString().substring(0,15)
}

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card-id">
      <div>
        <img src={picture} alt={"Picture of " + lastName} />
      </div>
      <div className="content">
        <p><b> Firstname:</b>{firstName}</p>
        <p><b> LastName:</b>{lastName}</p>
        <p><b>Gender:</b>{gender}</p>
        <p><b> Height:</b>{height}</p>
        <p><b> Birth:</b>{formatDate(birth)}</p>
      </div>
    </div>
  );
}



export default IdCard;
