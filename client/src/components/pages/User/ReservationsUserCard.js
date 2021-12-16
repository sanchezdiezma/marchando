import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

const parseDate = (date) => {
  date = new Date(date);
  return (
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    "h" +
    " día " +
    date.getDate()
  );
};

class ReservationsUserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation: props.reservation,
    };
  }

  render() {
    return (
      <Col md={4} style={{ overflow: "hidden" }}>
        <Card>
          <Card.Img
            variant="top"
            src={this.props.reservation.restaurantId.imageURL}
          />
          <Card.Body>
            <div className="tittle-selector">
              <Card.Title>
                {this.state.reservation.restaurantId.name}
              </Card.Title>
            </div>
            <hr></hr>

            <Card.Text>
              <div className="text-selector">
                <p className="subtittle">Dirección</p>
                {this.state.reservation.restaurantId.direction}
                <hr></hr>
              </div>

              <div className="text-selector">
                <p className="subtittle">Comensales</p>
                {this.state.reservation.persons}
                <hr></hr>
              </div>
              <div className="text-selector">
                <p className="subtittle">Hora</p>
                {parseDate(this.props.reservation.date)}
                <hr></hr>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default ReservationsUserCard;
