import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
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
        this.props.updatePendingRestaurants(this.adminService);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Card className="coaster-card" style={{ width: "16rem" }}>
        <Card.Img variant="top" src={this.props.restaurant.imageURL} />
        <Card.Body>
          <Card.Title>{this.props.restaurant.name}</Card.Title>

          <Card.Text>
            {this.props.restaurant.direction}
            <hr></hr>
            {this.props.restaurant.description}
            <hr></hr>
            {this.props.restaurant.priceRange}
            <hr></hr>
            {this.props.restaurant.capacity}
            <hr></hr>
            {this.props.restaurant.typeOfKitchen}
            <hr></hr>
            {this.props.restaurant.specialInfo}
            <hr></hr>
            {this.props.restaurant.status}
          </Card.Text>

          <Link to={"/"}>
            <Button variant="primary">Reserva</Button>
          </Link>
          <Button onClick={(e) => this.handleClick(e, "ACCEPTED")}>
            Aceptar
          </Button>
          <Button onClick={(e) => this.handleClick(e, "REJECTED")}>
            Rechazar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default RestaurantCard;
