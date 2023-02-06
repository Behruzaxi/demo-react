import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default function Navbarfunc() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/home">
            <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/result">
            <Nav.Link>Result</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}
