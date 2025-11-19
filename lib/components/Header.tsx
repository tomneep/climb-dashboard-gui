import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://docs.climb.ac.uk">Documentation</Nav.Link>
            <Nav.Link href="mailto:support@climb.ac.uk">Support</Nav.Link>
            <Nav.Link href="https://bryn.climb.ac.uk">Bryn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
