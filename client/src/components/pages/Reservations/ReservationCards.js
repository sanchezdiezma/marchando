import React, { Component } from "react";
import { Col, Modal, Button, Card } from "react-bootstrap";
import ReservationForm from "./ReservationForm";
import UserService from "../../../services/reservation.service";

class ReservationCard extends Component {
  constructor(props) {
    super();

    this.state = {
      persons: "",
      date: "",
    };

    this.userService = new UserService();
  }

  handleClick = (e) => {
    this.userService
      .newReservation(this.state)
      .then((response) => {
        return response;
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <Col md={4} style={{ overflow: "hidden" }}>
        <Card>
          <Card.Img variant="top" src={this.props.restaurant.imageURL} />
          <Card.Body>
            <div className="tittle-selector">
              <Card.Title>{this.props.restaurant.name}</Card.Title>
            </div>
            <hr></hr>

            <Card.Text>
              <div className="text-selector">
                <p className="subtittle">Dirección</p>
                {this.props.restaurant.direction}
                <hr></hr>
              </div>

              <div className="text-selector">
                <p className="subtittle">Descripción</p>
                {this.props.restaurant.description}
                <hr></hr>
              </div>

              <div className="text-selector">
                <p className="subtittle">Rango de precios</p>
                {this.props.restaurant.priceRange}
                <hr></hr>
              </div>

              <div className="text-selector">
                <p className="subtittle">Capacidad</p>
                {this.props.restaurant.capacity}
                <hr></hr>
              </div>
              <div className="text-selector">
                <p className="subtittle">Tipo de cocina</p>
                {this.props.restaurant.typeOfKitchen}
                <hr></hr>
              </div>
            </Card.Text>
            <hr></hr>
            <div className="d-flex justify-content-md-center">
              <Button
                onClick={this.openModal}
                id="button-custom"
                variant="primary"
              >
                Reserva
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Modal
          show={this.state.showModal}
          backdrop="static"
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nueva Reserva</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReservationForm
              closeModal={this.closeModal}
              restaurant={this.props.restaurant}
            />
          </Modal.Body>
        </Modal>
      </Col>
    );
  }
}

export default ReservationCard;
