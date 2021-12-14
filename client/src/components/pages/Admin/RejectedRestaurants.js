import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import AdminService from "../../../services/admin.service";
import RestaurantCard from "../RestaurantList/RestaurantCard";

class RejectedRestaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rejectedRestaurants: [],
      status: "REJECTED",
    };

    this.adminService = new AdminService();
  }

  updateRejectedRestaurants = (restaurants) => {
    this.setState({ rejectedRestaurants: restaurants });
  };

  componentDidMount() {
    this.adminService
      .getRejectedRestaurants()
      .then((response) => {
        this.setState({ rejectedRestaurants: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-around">
          {this.state.rejectedRestaurants?.map((restaurant) => (
            <RestaurantCard
              updateRejectedRestaurants={this.updateRejectedRestaurants}
              restaurant={restaurant}
              loggedUser={this.props.loggedUser}
            ></RestaurantCard>
          ))}
        </Row>
      </Container>
    );
  }
}

export default RejectedRestaurants;
