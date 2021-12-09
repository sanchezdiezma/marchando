import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import RestaurantService from '../../../services/restaurant.service'

class RestaurantForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
                name: "",
                direction: "",
                description: "",
                priceRange: "",
                capacity: 50,
                imageURL: "",
                location: {
                    Type: "Point",
                    Coordinates: []
                },
                typeOfKitchen: []
            
        }

        this.restaurantService = new RestaurantService()
    }

    handleSlider = (e) => {
        this.setState({ priceRange: e.target.value}) 
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.restaurantService.createRestaurant(this.state)
            .then(response => {
                console.log(response.data)
                this.props.history.push(`/restaurant/details/${response.data._id}`)
            })
            .catch(err => console.log(err))
    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
    }

    render() {
        return (
            (
                <Container>
                    <Row>

                        <Col md={{ span: 4, offset: 4 }}>
                            <h2>Crear Restaurante Nuevo</h2>

                            <hr />

                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Nombre del restaurante</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" placeholder="Nombre del restaurante" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="direction">
                                    <Form.Label>Direccion</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.direction} name="direction" type="direction" placeholder="Direccion" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" placeholder="Descripción" />
                                </Form.Group>

                                {/* <Form.Group className="mb-3" controlId="priceRange">
                                    <Form.Label>Rango de precios</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.password} name="priceRange" type="text" placeholder="priceRange" />
                                </Form.Group> */}

                                

                                <>
                                    <Form.Label>Rango de precios</Form.Label>
                                    <option value={this.state.priceRange}>{this.state.priceRange}€</option>
                                    <Form.Range onChange={this.handleSlider} value={this.state.priceRange}/>
                                </>

                                <Form.Group className="mb-3" controlId="capacity">
                                    <Form.Label>Aforo</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.capacity} name="capacity" type="text" placeholder="Aforo máximo" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="imageURL">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.imageURL} name="imageURL" type="text" placeholder="Sube tu logo" />
                                </Form.Group>

                                <Form.Select className="mb-3" aria-label="typeOfKitchen">
                                    <Form.Label>Tipo de Cocina</Form.Label>   
                                    <option>Tipo de Cocina</option>
                                    <option value="ALEMANA">Alemana</option>
                                    <option value="ANDALUZA">Andaluza</option>
                                    <option value="AMERICANA">Americana</option>
                                    <option value="ARGENTINA">Argentina</option>
                                    <option value="ARROCERÍA">Arrocería</option>
                                    <option value="AUSTRALIANA">Australiana</option>
                                    <option value="ÁRABE">Árabe</option>
                                    <option value="BANGLADESH">Bangladesh</option>
                                    <option value="BBQ">BBQ</option>
                                    <option value="BOCADILLOS">Bocadillos</option>
                                    <option value="BRASILEÑA">Brasileña</option>
                                    <option value="COREANA">Coreana</option>
                                    <option value="ECUATORIANA">Ecuatoriana</option>
                                    <option value="EGIPCIA">Egipcia</option>
                                    <option value="ESPAÑOLA">Española</option>
                                    <option value="ETÍOPE">Etíope</option>
                                    <option value="FRANCESA">Francesa</option>
                                    <option value="GALLEGA">Gallega</option>
                                    <option value="GRIEGA">Griega</option>
                                    <option value="HAMBURGUESAS">Hamburguesas</option>
                                    <option value="HAWAIANA">Hawaiana</option>
                                    <option value="INDIA">india</option>
                                    <option value="ITALIANA">Italiana</option>
                                    <option value="JAMAICANA">Jamaicana</option>
                                    <option value="JAPONESA">Japonesa</option>
                                    <option value="KURDA">Kurda</option>
                                    <option value="LIBANESA">Libanesa</option>
                                    <option value="PERUANA">Peruana</option>
                                    <option value="PAQUISTANI">Paquistani</option>
                                    <option value="PORTUGUESA">Portuguesa</option>
                                    <option value="RUSA">Rusa</option>
                                    <option value="TAILANDESA">Tailandesa</option>
                                    <option value="TURCA">Turca</option>
                                    <option value="VENEZOLANA">Venezolana</option>
                                    <option value="VIETNAMITA">Vietnamita</option>
                                    
                                </Form.Select>

                                <Form.Select className="mb-5" aria-label="specialInfo">
                                    <option>Especialitos</option>
                                    <option value="VEGETARIANO">Vegetariano</option>
                                    <option value="VEGANO">Vegano</option>
                                    <option value="ALERGIAS">Alergias</option>
                                    <option value="CELIACOS">Celiacos</option>
                                </Form.Select>
                                
                                

                                <Form.Group className="mb-3" controlId="location">
                                    <Form.Label>Localización</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.location} name="location" type="text" placeholder="Localización" />
                                </Form.Group>

                                



                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>)
        )
    }

}

export default RestaurantForm