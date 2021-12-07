import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import signupImg from '../../../assets/signup.jpg'


class SignupPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            password: "",
            email: "",
        }

        this.authService = new AuthService()
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.authService.signup(this.state.userName, this.state.password, this.state.email)
            .then(response => {
                console.log(response.data)
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
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <h2>Registro</h2>
                        <div>
                            <img src={signupImg} alt="logoSignUp" />
                        </div>

                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="userName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.userName} name="userName" type="text" placeholder="Elige un nombre de usuario" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Introduce tu Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Introduce tu email" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default SignupPage