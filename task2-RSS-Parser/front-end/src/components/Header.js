import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  to="/">
          Navbar
        </Navbar.Brand>
          <Nav >
            <Nav.Link  to="/">
              Home
            </Nav.Link>
            <Nav.Link  to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}