import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RestaurantsPage.css";
import UserService from "../../../services/user.service";

class ReservationForm extends Component {
  constructor(props) {
    super();

    this.state = {
      persons: "0",
      date: "",
    };

    this.userService = new UserService();
  }

  handleClick = (e) => {
    this.userService
      .newReservation(this.state)
      .then((response) => {
        return this.userService.getPendingRestaurants();
      })
      .then((response) => {
        this.props.updatePendingRestaurants(response.data);
      })
      .catch((err) => console.log(err));
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
              <Link to={"/"}>
                <Button id="button-custom" variant="primary">
                  Reserva
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ReservationForm;
