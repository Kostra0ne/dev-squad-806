import React, { Component } from "react";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    isHappy: false,
  };

  handleChange = (event) => {
    // console.log(event.target.type);
    const key = event.target.name;
    let value;
    //   event.target.type === "checkbox"
    //     ? event.target.checked
    //     : event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    // you can implement logic before setting the state

    this.setState({ [key]: value });
  };

  //   handleFirstName = (event) => {
  //     console.log("User inputting");
  //     this.setState({ firstName: event.target.value });
  //   };

  //   handleLastName = (event) => {
  //     this.setState({ lastName: event.target.value });
  //   };

  //   handlePassword = (event) => {
  //     this.setState({ password: event.target.value });
  //   };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // validate data

    // Post to backend...
    //   this.setState({
    //     firstName: "",
    //     lastName: "",
    //     password: "",
    //   });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Signup form</h2>
          <div>
            <label htmlFor="firstName">first name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              //   onChange={this.handleFirstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              //   onChange={this.handleLastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              name="password"
              //   onChange={this.handlePassword}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="isHappy">I'm happy</label>
            <input
              type="checkbox"
              id="isHappy"
              name="isHappy"
              //   onChange={this.handlePassword}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
