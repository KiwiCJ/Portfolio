import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <Navbar expand="lg" className="custom-navbar sticky-top">
    <Container>
      <Navbar.Brand as={Link} to='/'>Cameron Orr</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>About Me</Nav.Link>
          <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
          <Nav.Link as={Link} to='/experience'>Experience</Nav.Link>
          <Nav.Link as={Link} to='/skills'>Skills</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
