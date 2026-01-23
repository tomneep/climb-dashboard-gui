/**
 * Controls the navbar on the dashboard.
 *
 * Currently contains the name of the dashboard (the Brand) and links
 * to various useful places (docs, support, Bryn).
 **/

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container fluid>
        <Navbar.Brand title="CLIMB Dashboard">CLIMB Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="https://docs.climb.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </Nav.Link>
            <Nav.Link
              href="mailto:support@climb.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support
            </Nav.Link>
            <Nav.Link
              href="https://bryn.climb.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bryn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
