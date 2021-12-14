import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ReservationService from "../../../services/reservation.service";

class ReservationSubmitCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservationId: props.reservation._id,
    };

    this.reservationService = new ReservationService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.reservationService
      .updateReservation(this.state.reservationId)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.props.refreshReservations();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Numero de personas:</Form.Label>
          <Form.Text name="persons" type="string">
            {this.props.reservation.persons}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Horario:</Form.Label>
          <Form.Text name="date" type="string">
            {this.props.reservation.date}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Hacer Reserva
        </Button>
      </Form>
    );
  }
}

export default ReservationSubmitCard;
