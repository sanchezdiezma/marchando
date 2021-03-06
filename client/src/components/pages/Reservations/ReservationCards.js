import React, { Component } from "react";
import { Container,Col, Modal, Button, Card } from "react-bootstrap";
import ReservationForm from "./ReservationForm";
import UserService from "../../../services/reservation.service";

class ReservationCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: "",
      date: "",
      showModal: false,
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
      <Container style={{ paddingTop: "56px" }}>
        <Col md={{span: 4, offset: 3}} style={{ overflow: "hidden" }}>
          
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
           
            <div className="d-flex justify-content-md-center">
              <Button
                onClick={this.openModal}
                id="button-custom"
                variant="primary"
              >
                Crea una Oferta
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
      </Container>
    );
  }
}

export default ReservationCard;
