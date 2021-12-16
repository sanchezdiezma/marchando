import React, { Component } from "react";
import { Modal, Card, Button, Col } from "react-bootstrap";
import "./RestaurantsPage.css";
import AdminService from "../../../services/admin.service";
import ReservationModal from "./ReservationModal";

class RestaurantCard extends Component {
  constructor(props) {
    super();

    this.state = {
      restaurant: props.restaurant,
      status: props.restaurant.status,
      showModal: false,
    };

    this.adminService = new AdminService();
  }

  handleClick = (e, status) => {
    this.adminService
      .changeRestaurantStatus(this.state.restaurant._id, { status })
      .then((response) => {
        return this.adminService.getPendingRestaurants();
      })
      .then((response) => {
        this.props.updatePendingRestaurants(response.data);
      })
      .catch((err) => console.log(err));

    this.refreshPendingRestaurants();
  };

  deleteClick = (e) => {
    this.adminService
      .deleteOneRestaurant(this.state.restaurant._id)
      .then((response) => {
        return this.adminService.getRejectedRestaurants();
      })
      .catch((err) => console.log(err));

    this.refreshdeletedRestaurants();
  };

  refreshPendingRestaurants = () => {
    this.adminService
      .getPendingRestaurants()
      .then((response) => {
        this.setState({ restaurant: response.data });
      })
      .catch((err) => console.log(err));
  };

  refreshdeletedRestaurants = () => {
    this.adminService
      .deleteOneRestaurant()
      .then((response) => {
        this.setState({ restaurant: response.data });
      })
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
      <>
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
                </div>
              </Card.Text>
              <hr></hr>
              {this.state.status === "PENDING" && (
                <div className="d-flex justify-content-md-center">
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
              )}
              {this.state.status === "REJECTED" && (
                <div className="d-flex justify-content-md-center">
                  <Button
                    id="button-custom"
                    onClick={(e) => this.deleteClick(e)}
                  >
                    ELIMINAR
                  </Button>
                </div>
              )}
              {this.props.loggedUser.role === "USER" && (
                <div className="d-flex justify-content-md-center">
                  <Button
                    onClick={this.openModal}
                    id="button-custom"
                    variant="primary"
                  >
                    Reserva
                  </Button>
                  <Modal
                    show={this.state.showModal}
                    backdrop="static"
                    onHide={this.closeModal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Reservas disponibles</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ReservationModal
                        closeModal={this.closeModal}
                        restaurant={this.props.restaurant}
                        onHide={this.closeModal}
                      />
                    </Modal.Body>
                  </Modal>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default RestaurantCard;
