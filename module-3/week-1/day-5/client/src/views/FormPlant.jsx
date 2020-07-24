import React, { Component } from "react";
import plantAPI from "../api/plantAPI";
import { Redirect } from "react-router-dom";

class FormPlant extends Component {
  state = {
    name: "",
    price: 0,
    image: "",
    success: false,
  };

  firstInputRef = React.createRef(null);

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    // this.firstInputRef.current.focus();
    // console.log(this.firstInputRef);

    const mode = this.props.match.params.mode;
    const plantId = this.props.match.params.id;

    // if (mode === "edit" && !plantId) {
    //   this.props.history.push("/");
    //   return;
    // }

    if (mode === "edit") {
      plantAPI
        .getOne(plantId)
        .then((apiRes) => {
          this.setState({
            name: apiRes.data.name,
            image: apiRes.data.image,
            price: apiRes.data.price,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // plantAPI.createOne(this.state)

    plantAPI
      .createOne({
        name: this.state.name,
        price: this.state.price,
        image: this.state.image,
      })
      .then((apiRes) => {
        this.setState({ success: true });
        // this.props.history.push("/plants");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const mode = this.props.match.params.mode;

    if (this.state.success) {
      return <Redirect to="/plants" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{mode === "edit" ? "Edit" : "Create"} form</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={this.firstInputRef}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <div></div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormPlant;
