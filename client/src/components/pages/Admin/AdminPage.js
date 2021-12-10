import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
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

  updatePendingRestaurants = (restaurants) => {
    this.setState({ pendingRestaurants: restaurants });
  };

  componentDidMount() {
    this.adminService
      .getPendingRestaurants()
      .then((response) => {
        this.setState({ pendingRestaurants: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          {this.state.pendingRestaurants?.map((restaurant) => (
            <Col md={6} style={{ overflow: "hidden" }}>
              <RestaurantCard
                updatePendingRestaurants={this.updatePendingRestaurants}
                restaurant={restaurant}
              ></RestaurantCard>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AdminPage;
