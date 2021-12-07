import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const authService = new AuthService()


const Navigation = ({ loggedUser, storeUser }) => {

  const logout = () => {
    authService.logout()
      .then(response => storeUser(null))
      .catch(err => console.log(err))
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/restaurantes">Restaurantes</Nav.Link>
          {loggedUser ?
            <Nav.Link as={"span"} onClick={logout}>Logout</Nav.Link>
            :
            <>
              <Nav.Link as={Link} to="/signup">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/nuevo-restaurante">Acceso Restaurantes</Nav.Link>
            </>
          }
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Navigation