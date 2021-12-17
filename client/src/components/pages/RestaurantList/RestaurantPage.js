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
      <Container style={{ paddingTop: "56px" }}>
        
        <h2 className=" admin-title"> - Detalles del Restaurante - </h2>

        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: "hidden" }}>
            
            <article>
              
              <div className="card-new">

                <br/>
                <h3>{name}</h3>
                <p>Dirección - {direction}</p>
                <p>Descripción - {description}</p>
                <p>Rango de precios -  {priceRange}</p>
                <p>Aforo -  {capacity}</p>
                <p>Tipo de cocina -  {typeOfKitchen}</p>
                <p>Información adicional -  {specialInfo}</p>
                <p>Estado - {status}</p>

              </div>
                
            </article>

          </Col>
          <Col md={4}>
            <img src={imageURL}></img>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RestaurantDetails;
