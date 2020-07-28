import React, { Component } from "react";

const colors = ["purple", "green", "red", "yellow", "dodgerblue"];

class LikeButton extends Component {
  state = {
    likes: 0,
  };

  handleLike = (event) => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const color = colors[this.state.likes % colors.length];
    const btnStyle = {
      backgroundColor: color,
      padding: "10px 20px",
    };
    return (
      <button style={btnStyle} onClick={this.handleLike}>
        Likes: {this.state.likes}
      </button>
    );
  }
}

export default LikeButton;
