import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import Login from '../../../assets/login.jpg'


class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            password: ""
        }

        this.authService = new AuthService()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.authService.login(this.state.userName, this.state.password)
            .then(response => {
                this.props.storeUser(response.data)
                this.props.history.push("/")

            })
            .catch(err => console.log(err.response.data.message))
    }

    handleInputChange = (e) => {
        const { name, value } = e.currentTarget

        this.setState({ [name]: value })
    }

    render() {
        return (
            (   
                
            <Container>
                <Row className="justify-content-md-center align-items-center wrapper">
                    <Col md={{ span: 4 }}>
                            <img className="img" src={Login} alt="logoSignUp" />
                    </Col>
                <Col md={{ span: 4 }}>
                    <div className="main-form-container">
                        <h2>Login</h2>

                        <div className="form">
                                    
                                    <Form onSubmit={this.handleSubmit}>
                                    
                                    <Form.Group className="mb-3" controlId="userName">
                                        <Form.Control onChange={this.handleInputChange} value={this.state.userName} name="userName" type="text" placeholder="Nombre de usuario" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                       <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Password" />
                                        </Form.Group>
                            

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                        </div>
                    </div>
                </Col>
                </Row>
            </Container>)
        )
    }

}

export default LoginPage