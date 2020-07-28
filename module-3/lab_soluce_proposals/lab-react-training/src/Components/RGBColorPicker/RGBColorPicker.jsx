import React, { Component } from "react";
import SingleColorPicker from "./SingleColorPicker";
class RGBColorPicker extends Component {
  state = {
    rValue: 255,
    gValue: 180,
    bValue: 100,
  };

  handleColor = (color, value) => {
    if (Number(value) > 255) value = 255;
    if (Number(value) < 0) value = 0;
    this.setState({ [color]: value });
  };

  render() {
    const { rValue, bValue, gValue } = this.state;
    const mixedColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

    return (
      <div>
        <SingleColorPicker
          color="r"
          value={this.state.rValue}
          onChange={this.handleColor}
        />
        <SingleColorPicker
          color="g"
          value={this.state.gValue}
          onChange={this.handleColor}
        />
        <SingleColorPicker
          color="b"
          value={this.state.bValue}
          onChange={this.handleColor}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              backgroundColor: mixedColor,
              width: "100px",
              height: "100px",
              border: "2px solid black",
              margin: "10px",
            }}
          ></div>
          <p>
            rgb({rValue},{gValue},{bValue})
          </p>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
