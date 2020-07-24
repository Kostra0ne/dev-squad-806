import React from "react";
import { Link } from "react-router-dom";

import plantAPI from "../api/plantAPI";

class Plants extends React.Component {
  state = {
    plants: [],
  };

  componentDidMount() {
    plantAPI
      .getAll()
      .then((apiRes) => {
        this.setState({ plants: apiRes.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = (id) => {
    // console.log(id);
    // console.log("i am clicked");

    plantAPI
      .delete(id)
      .then((apiRes) => {
        // const copy = [...this.state.plants];
        // const indexOfElement = copy.findIndex((plant) => plant._id === id);
        // copy.splice(indexOfElement, 1);
        // this.setState({ plants: copy });
        this.setState({
          plants: this.state.plants.filter((p) => p._id !== id),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Plants</h1>

        <Link to="/plants/create">Create Plant</Link>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.plants.map((plant) => (
              <tr key={plant._id}>
                <td>{plant.name}</td>
                <td>
                  <img style={{ width: "50px" }} src={plant.image} alt="" />
                </td>
                <td>{plant.price}</td>
                <td>
                  <Link to={`/plants/edit/${plant._id}`}>Edit</Link>
                </td>
                <td onClick={() => this.handleDelete(plant._id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Plants;
