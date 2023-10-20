import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarAdmin = () => {
  return (
    <header>
      {/* Navbar */}
      <Navbar expand="lg" bg="light" variant="light" fixed="top">
        <Container>
          {/* Navbar Brand (Logo) */}
          <Link to="/dashboard_admin">
            <Navbar.Brand>
              <img
                src="https://www.polban.ac.id/wp-content/uploads/2018/06/logo-polban-80.png"
                width="45"
                height="60"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
          </Link>

          {/* Navbar Toggler */}
          <Navbar.Toggle aria-controls="navbarExample01" />
          <Navbar.Collapse id="navbarExample01">
            <Nav className="me-auto">
              {/* Dosen */}
              <Nav.Link as={Link} to="/dashboard_admin/dosen">
                Dosen
              </Nav.Link>
              {/* Mata Kuliah */}
              <Nav.Link as={Link} to="/dashboard_admin/mata_kuliah">
                Mata Kuliah
              </Nav.Link>
              {/* Penelitian */}
              {/* <Nav.Link as={Link} to="/dashboard_admin/penelitian">
                Penelitian
              </Nav.Link> */}
            </Nav>
            <Nav>
              {/* Logout */}
              <Link to="/home">
                <Button variant="warning" style={{ fontWeight: "500" }}>
                  Logout
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar */}
    </header>
  );
};

export default NavbarAdmin;
