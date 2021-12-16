import React, { Component } from "react";
import ReservationService from "../../../services/reservation.service";
import ReservationSubmitCard from "./ReservationSubmitCard";

class ReservationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant: props.restaurant,
      reservations: [],
    };

    this.reservationService = new ReservationService();
  }

  componentDidMount() {
    this.reservationService
      .getReservations(this.state.restaurant._id)
      .then((response) => {
        const availableReservations = response.data.filter(
          (reservation) => reservation.status === "AVAILABLE"
        );
        this.setState({ reservations: availableReservations });
      })
      .catch((err) => console.log(err));
  }

  refreshReservations = () => {
    this.reservationService
      .getReservations(this.state.restaurant._id)
      .then((response) => {
        const availableReservations = response.data.filter(
          (reservation) => reservation.status === "AVAILABLE"
        );
        console.log(
          "available reservations en el modal",
          availableReservations
        );
        this.setState({ reservations: availableReservations });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        {this.state.reservations.map((reservation) => {
          return (
            <ReservationSubmitCard
              key={reservation._id}
              refreshReservations={this.refreshReservations}
              reservation={reservation}
            />
          );
        })}
      </>
    );
  }
}

export default ReservationModal;
