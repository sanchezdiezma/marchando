import React, { Component } from 'react';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import AdminService from '../../../services/admin.service'

class AdminPage extends Component{

     constructor() {
        super()

        this.state = {
            pendingRestaurants: []
            
        }

        this.service = new AdminService()
    }

componentDidMount() {

  const id = this.props.match.params.id

    this.service.getPendingRestaurants(id)
      .then(response => {
        this.setState({pendingRestaurants: response.data})
      })
      .catch(err => console.log(err))
  }

handleSubmit = (e) => {
        e.preventDefault();

        this.AdminService.getPendingRestaurants(this.state.pendingRestaurants)
            .then(response => {
                console.log(response.data)
                this.props.storeUser(response.data)
                this.props.history.push("/")
            })
            .catch(err => console.log(err.response.data.message))   
    }  
handleInputChange = (e) => {

        const { name, value } = e.currentTarge
        this.setState({ [name]: value })
    }
  render() {

    return (
      <Container>
        <Row className="justify-content-around">
        {this.state.pendingRestaurants?.map((restaurant)=>
            <Col md={6} style={{ overflow: "hidden" }}>
                 <article>
                     <h2>{restaurant.name}</h2>
              <div>
                <p>{restaurant.direction}</p>
                <br />
                <p> {restaurant.description}</p>
                <p> {restaurant.priceRange}</p>
                <p> {restaurant.capacity}</p>
                <p> {restaurant.typeOfKitchen}</p>
                <p> {restaurant.specialInfo}</p>
                <p> {restaurant.status}</p>
                <Form.Select value={restaurant.status} name="status" onChange={this.handleInputChange} aria-label="Default select example" controlId="status">
                              <option value="PENDING">Estado del Restaurante</option>
                              <option value= "ACCEPTED" >ACEPTAR</option>
                              <option value= "REJECTED" >ELIMINAR</option>
                           </Form.Select>
              </div>
            </article>
            <img src={restaurant.imageURL} alt={restaurant.name} ></img>
          </Col>
        )
        }
        </Row>
      </Container>
    )
  }
}

export default AdminPage

