import React, { Component } from "react";
import plantAPI from "../api/plantAPI";
export class FormEditPlant extends Component {
  state = {
    name: "",
    price: 0,
    image: "",
  };

  componentDidMount() {
    const plantId = this.props.match.params.id;

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

  handleSubmit = (event) => {
    event.preventDefault();
    const plantId = this.props.match.params.id;

    plantAPI
      .updateOne(plantId, {
        name: this.state.name,
        image: this.state.image,
        price: this.state.price,
      })
      .then((apiRes) => {
        this.props.history.push("/plants");
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Edit form</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            // ref={this.firstInputRef}
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

export default FormEditPlant;
