import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import AuthService from "../../../services/admin.service";

class UserProfile extends Component {
  constructor() {
    super();

    this.state = {};

    this.authService = new AuthService();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          <h1>Estas son todas tus reservas</h1>
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
