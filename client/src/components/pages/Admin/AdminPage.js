import React, { Component } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import AdminService from "../../../services/admin.service";
import RestaurantCard from "../RestaurantList/RestaurantCard";

class AdminPage extends Component {
  constructor() {
    super();

    this.state = {
      pendingRestaurants: [],
      status: "PENDING",
    };

    this.adminService = new AdminService();
  }

  updatePendingRestaurants(service) {
    service
      .getPendingRestaurants()
      .then((response) => {
        this.setState({ pendingRestaurants: response.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.updatePendingRestaurants(this.adminService);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          {this.state.pendingRestaurants?.map((restaurant) => (
              <RestaurantCard
                updatePendingRestaurants={this.updatePendingRestaurants}
                restaurant={restaurant}
              ></RestaurantCard>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AdminPage;
