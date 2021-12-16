import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import ReservationService from "../../../services/reservation.service";

const parseDate = (date) => {
  date = new Date(date);
  return (
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    "h" +
    " día " +
    date.getDate()
  );
};

class ReservationSubmitCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservationId: props.reservation._id,
      showModal: false,
    };

    this.reservationService = new ReservationService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.reservationService
      .updateReservation(this.state.reservationId)
      .then((res) => this.props.refreshReservations())
      .catch((err) => console.log(err));
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
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
            {parseDate(this.props.reservation.date)}
          </Form.Text>
        </Form.Group>
        <Button closeModal={this.closeModal} variant="primary" type="submit">
          Hacer Reserva
        </Button>
      </Form>
    );
  }
}

export default ReservationSubmitCard;
