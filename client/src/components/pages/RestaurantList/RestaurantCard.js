import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RestaurantsPage.css";
import AdminService from "../../../services/admin.service";

class RestaurantCard extends Component {
  constructor(props) {
    super();

    this.state = {
      restaurant: props.restaurant,
      status: props.restaurant.status,
    };

    this.adminService = new AdminService();
  }

  handleClick = (e, status) => {
    console.log(this.state.restaurant._id);
    this.adminService
      .changeRestaurantStatus(this.state.restaurant._id, { status })
      .then((response) => {
        //this.setState({ status: response.data.status });
        return this.adminService.getPendingRestaurants();
      })
      .then((response) => {
        this.props.updatePendingRestaurants(response.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Col md={4} style={{ overflow: "hidden" }}>
        <Card className="coaster-card">
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

              <div className="text-selector">
                <p className="subtittle">Información Adicional</p>
                {this.props.restaurant.specialInfo}
                <hr></hr>
              </div>

              <div className="text-selector">
                <p className="subtittle">Estado</p>

                {this.props.restaurant.status}
                <hr></hr>
              </div>
            </Card.Text>

            <div className="d-flex justify-content-md-center">
              <Link to={"/"}>
                <Button id="button-custom" variant="primary">
                  Reserva
                </Button>
              </Link>

              <Button
                id="button-custom"
                onClick={(e) => this.handleClick(e, "ACCEPTED")}
              >
                Aceptar
              </Button>

              <Button
                id="button-custom"
                onClick={(e) => this.handleClick(e, "REJECTED")}
              >
                Rechazar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default RestaurantCard;
