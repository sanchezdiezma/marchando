import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ReservationService from "../../../services/reservation.service";
import ReservationsUserCard from "./ReservationsUserCard";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservations: [],
    };

    this.reservationService = new ReservationService();
  }

  componentDidMount() {
    this.reservationService
      .clientReservation()
      .then((response) => {
        console.log(response);
        this.setState({ reservations: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      
      <Container style={{ paddingTop: "56px" }}>
        <Row className="justify-content-around">
          <h2 className="admin-title">- Estas son todas tus reservas -</h2>
          {this.state.reservations?.map((reservation) => (
            
            <ReservationsUserCard
              key={reservation._id}
              reservation={reservation}
            ></ReservationsUserCard>
          ))}
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
