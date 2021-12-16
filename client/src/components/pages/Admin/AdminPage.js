import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import AdminService from "../../../services/admin.service";
import RestaurantCard from "../RestaurantList/RestaurantCard";

class AdminPage extends Component {
  constructor(props) {
    super(props);

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

    this.refreshPendingRestaurants();
  }

  refreshPendingRestaurants = () => {
    this.adminService
      .getPendingRestaurants()
      .then((response) => {
        this.setState({ pendingRestaurants: response.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container style={{ paddingTop: "56px" }} className="ml-1">
        <Row className="justify-content-around">
          <h2 className="admin-title"> - Restaurantes con Solicitud -</h2>
          {this.state.pendingRestaurants?.map((restaurant) => (
            <RestaurantCard
              updatePendingRestaurants={this.updatePendingRestaurants}
              restaurant={restaurant}
              loggedUser={this.props.loggedUser}
            ></RestaurantCard>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AdminPage;
