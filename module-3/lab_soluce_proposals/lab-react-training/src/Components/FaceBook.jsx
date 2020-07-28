import React from "react";
import "../styles/FaceBook.css";

import data from "../data/berlin.json";

const FaceBook = (props) => {
  return (
    <div>
      {data.map((student, index) => (
        <div className="Profile" key={index}>
          <img src={student.img} alt="" />
          <div>
            <div>First name: {student.firstName}</div>
            <div>Last name:{student.lastName}</div>
            <div>Country:{student.country}</div>
            <div>Type: {student.isStudent ? "Student" : "Teacher"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
