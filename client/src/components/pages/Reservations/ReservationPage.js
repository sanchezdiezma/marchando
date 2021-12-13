import React, { Component } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";

class ReservationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

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
      <div>
        <Button onClick={this.openModal}>Añade tu reserva</Button>

        <Modal
          show={this.state.showModal}
          backdrop="static"
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nueva Reserva</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ReservationList;
