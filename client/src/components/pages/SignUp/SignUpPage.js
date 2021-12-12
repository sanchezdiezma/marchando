import React, { Component } from "react";
import "./SignUpPage.css";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import signupImg from "../../../assets/signup.jpg";

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      email: "",
      role: "",
    };

    this.authService = new AuthService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService
      .signup(
        this.state.userName,
        this.state.password,
        this.state.email,
        this.state.role
      )
      .then((response) => {
        console.log(response.data);
        this.props.storeUser(response.data);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err.response.data.message));
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center align-items-center wrapper">
          <Col md={{ span: 4 }}>
            <img className="img" src={signupImg} alt="logoSignUp" />
          </Col>
          <Col md={{ span: 4 }}>
            <div className="main-form-container">
              <h2>Regístrate en Marchando</h2>

              <div className="form">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3" controlId="userName">
                    <Form.Control
                      onChange={this.handleInputChange}
                      value={this.state.userName}
                      name="userName"
                      type="text"
                      placeholder="Escribe un nombre de usuario"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      onChange={this.handleInputChange}
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="Escribe tu contraseña"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      onChange={this.handleInputChange}
                      value={this.state.email}
                      name="email"
                      type="text"
                      placeholder="Introduce tu email"
                    />
                  </Form.Group>

                  <Form.Select
                    className="mb-3"
                    value={this.state.role}
                    name="role"
                    onChange={this.handleInputChange}
                    aria-label="Default select example"
                    controlId="role"
                  >
                    <option>Selecciona tu rol</option>
                    <option value="USER">Usuario</option>
                    <option value="RESTAURANT">Restaurante</option>
                  </Form.Select>

                  <Button id="button-custom" type="submit">
                    Marchando
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupPage;
