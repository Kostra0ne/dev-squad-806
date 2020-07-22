import React, { Component } from "react";

class Dice extends Component {
  state = {
    isClicked: false,
  };

  handleClick = () => {
    if (this.state.isClicked) return;
    this.setState({ isClicked: true });
    setTimeout(() => {
      this.setState({ isClicked: false });
    }, 1000);
  };

  render() {
    const imagesUrl = [
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png",
    ];

    const randomIndex = Math.floor(Math.random() * imagesUrl.length);
    const randomImage = imagesUrl[randomIndex];

    const imgStyle = { width: "100px" };

    if (this.state.isClicked) {
      return (
        <img
          style={imgStyle}
          onClick={this.handleClick}
          src="/img/dice-empty.png"
          alt="empty dice"
        />
      );
    } else {
      return (
        <img
          style={imgStyle}
          onClick={this.handleClick}
          src={randomImage}
          alt="dice"
        />
      );
    }
  }
}

export default Dice;
