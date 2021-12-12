import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RestaurantService from "../../../services/restaurant.service";

class RestaurantDetails extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      direction: "",
      description: "",
      priceRange: "",
      capacity: "",
      imageURL: "",
      location: {
        Type: "Point",
        Coordinates: [],
      },
      typeOfKitchen: [],
      specialInfo: [],
    };

    this.service = new RestaurantService();
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    this.service
      .getOneRestaurant(id)
      .then((response) => {
        const {
          name,
          direction,
          description,
          priceRange,
          capacity,
          imageURL,
          typeOfKitchen,
          specialInfo,
          status,
        } = response.data;
        this.setState({
          name,
          direction,
          description,
          priceRange,
          capacity,
          imageURL,
          typeOfKitchen,
          specialInfo,
          status,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      name,
      direction,
      description,
      priceRange,
      capacity,
      imageURL,
      typeOfKitchen,
      specialInfo,
      status,
    } = this.state;

    return (
      <Container>
        <h1>Detalles</h1>

        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: "hidden" }}>
            <article>
              <h2>{name}</h2>
              <div>
                <p>{direction}</p>
                <hr />
                <br />
                <p> {description}</p>
                <p> {priceRange}</p>
                <p> {capacity}</p>
                <p> {typeOfKitchen}</p>
                <p> {specialInfo}</p>
                <p> {status}</p>
              </div>
            </article>
          </Col>
          <Col md={4}>
            <img src={imageURL} alt={name}></img>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RestaurantDetails;
