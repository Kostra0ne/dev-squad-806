import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button,
  Container,
} from "reactstrap";

const langs = {
  de: "Hallo",
  fr: "Bonjour",
  es: "Ola",
};

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    nationality: "fr",
    description: "Your description",
  };

  isEmailCorrect() {
    // @stackOverflow
    // https://stackoverflow.com/a/46181/13374041
    // Thanks @rnevius https://stackoverflow.com/users/3518452/rnevius

    //eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }

  isStrongPassword() {
    // Advanced password strength validation.
    // @Srinivas
    // https://stackoverflow.com/a/21456918/13374041

    // This is basic :D
    return this.state.password.length >= 5;
  }

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={(e) => this.handleChange(e)}
              value={this.state.email}
              invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
              valid={this.isEmailCorrect()}
              type="email"
              name="email"
              id="email"
            />
            <FormFeedback invalid="true">Invalid email</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={(e) => this.handleChange(e)}
              value={this.state.password}
              invalid={
                this.state.password.length > 0 && !this.isStrongPassword()
              }
              valid={this.state.password.length > 0 && this.isStrongPassword()}
              type="password"
              name="password"
              id="password"
            />
            <FormFeedback invalid="true">Your password is weak.</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label for="nationality">Nationality</Label>
            <Input
              onChange={this.handleChange}
              value={this.state.nationality}
              type="select"
              name="nationality"
              id="nationality"
            >
              <option value="fr">France</option>
              <option value="de">Germany</option>
              <option value="es">Spain</option>
            </Input>
          </FormGroup>

          <Button color="primary">Submit</Button>
        </Form>

        <p>{langs[this.state.nationality]}</p>
        {this.state.email.length > 3 && (
          <p>Your email address is: {this.state.email}</p>
        )}
        {this.state.email.length > 3 && (
          <p>
            {this.isEmailCorrect()
              ? "Your email is valid"
              : "Your email is invalid"}
          </p>
        )}
      </Container>
    );
  }
}

export default Signup;
