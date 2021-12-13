import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ReservationService from "../../../services/reservation.service";

export default class ReservationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: 0,
      date: "",
    };

    this.reservationService = new ReservationService();
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.reservationService
      .newReservation(this.props.restaurant._id, this.state)
      .then((response) => {
        this.props.closeModal();
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Numero de Personas</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.persons}
            name="persons"
            type="number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Horario</Form.Label>
          <input
            type="time"
            min="00:00"
            max="23:59"
            onChange={this.handleInputChange}
            value={this.state.date}
            name="date"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear oferta
        </Button>
      </Form>
    );
  }
}
