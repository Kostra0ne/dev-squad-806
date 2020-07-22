import React, { Component } from "react";
import { FormGroup, Input, FormText, FormFeedback, Label } from "reactstrap";

class Signup extends Component {
  handleChange = (event) => {
    console.log(event.target.type);
  };

  render() {
    return (
      <FormGroup>
        <Label for="exampleEmail">Valid input</Label>
        <Input name="toto" type="password" onChange={this.handleChange} />
        <FormFeedback valid>Sweet! that name is available</FormFeedback>
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
    );
  }
}

export default Signup;
