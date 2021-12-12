import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import AdminService from "../../../services/admin.service";
import RestaurantCard from "../RestaurantList/RestaurantCard";

class ApprovedRestaurants extends Component {
  constructor() {
    super();

    this.state = {
      acceptedRestaurants: [],
      status: "ACCEPTED",
    };

    this.adminService = new AdminService();
  }

  updateAcceptedRestaurants = (restaurants) => {
    this.setState({ acceptedRestaurants: restaurants });
  };

  componentDidMount() {
    this.adminService
      .getAcceptedRestaurants()
      .then((response) => {
        this.setState({ acceptedRestaurants: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          {this.state.acceptedRestaurants?.map((restaurant) => (
            <RestaurantCard
              updateAcceptedRestaurants={this.updateAcceptedRestaurants}
              restaurant={restaurant}
            ></RestaurantCard>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ApprovedRestaurants;
