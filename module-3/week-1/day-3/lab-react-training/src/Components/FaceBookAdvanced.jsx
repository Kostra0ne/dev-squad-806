import React, { Component } from "react";
import data from "../data/berlin.json";

class FaceBookAdvanced extends Component {
  state = {
    selectedCountry: null,
    countryList: [...new Set(data.map((student) => student.country))],
  };

  handleCountrySelect = (country) => {
    this.setState({ selectedCountry: country });
  };

  render() {
    //  const countryList = [...new Set(data.map((student) => student.country))]
    return (
      <div>
        <button
          style={{
            backgroundColor:
              this.state.selectedCountry === null ? "dodgerblue" : "white",
          }}
          onClick={(event) => this.handleCountrySelect(null)}
        >
          All
        </button>
        {this.state.countryList.map((country, index) => (
          <button
            key={index}
            style={{
              backgroundColor:
                this.state.selectedCountry === country ? "dodgerblue" : "white",
            }}
            onClick={(event) => this.handleCountrySelect(country)}
          >
            {country}
          </button>
        ))}

        <div className="students">
          {data.map((student, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  this.state.selectedCountry === student.country
                    ? "dodgerblue"
                    : "white",
              }}
              className="Profile"
            >
              <img src={student.img} alt={student.firstName} />
              <div>
                <p>First name: {student.firstName}</p>
                <p>Last name: {student.lastname}</p>
                <p>Country: {student.country}</p>
                <p>Type: {student.isStudent ? "Student" : "Teacher"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FaceBookAdvanced;
