import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  handleClick = (event) => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    const { img, imgClicked } = this.props;

    return (
      <div onClick={this.handleClick}>
        {/* <img
          style={{ display: this.state.isClicked ? "none" : "block" }}
          src={img}
          alt="Mc"
        />
        <img
          style={{ display: this.state.isClicked ? "block" : "none" }}
          src={imgClicked}
          alt="100s"
        /> */}

        {!this.state.isClicked && (
          <img
            style={{ display: this.state.isClicked ? "none" : "block" }}
            src={img}
            alt="Mc"
          />
        )}

        {this.state.isClicked && (
          <img
            style={{ display: this.state.isClicked ? "block" : "none" }}
            src={imgClicked}
            alt="100s"
          />
        )}
      </div>
    );
  }
}

export default ClickablePicture;
