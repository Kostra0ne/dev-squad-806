import React from "react";
import "../styles/creditCard.css";

const types = {
  Visa: "/img/visa.png",
  "Master Card": "/img/master-card.svg",
};

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const divStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div style={divStyles} className="card-credit">
      <div className="card-type">
        <img src={types[type]} alt="visa" />
      </div>
      <div className="card-number">•••• •••• •••• •••• {number.substr(-4)}</div>
      <div className="d-flex">
        <div className="card-expiration">
          Expires {expirationMonth}/{expirationYear.toString().substr(-2)}
        </div>
        <div>{bank}</div>
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
