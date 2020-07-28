import React from "react";
import Rating from "./Rating";
import "../styles/DriverCard.css";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="DriverCard">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <h2 className="name">{name}</h2>
        <h3 className="rating">
          <Rating>{rating}</Rating>
        </h3>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
