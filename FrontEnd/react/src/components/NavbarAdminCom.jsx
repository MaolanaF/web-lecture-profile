import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarAdminCom = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src="https://www.polban.ac.id/wp-content/uploads/2018/06/logo-polban-80.png"
            width="45"
            height="60"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Navbar Toggler */}
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            {/* Beranda */}
            <Nav.Link as={Link} to="/dashboard_admin/dosen" style={{ fontWeight:"bold" }}>
                Dosen
            </Nav.Link>
            {/* Mata Kuliah */}
            <Nav.Link as={Link} to="/dashboard_admin/mata_kuliah" style={{ fontWeight:"bold" }}>
                Mata Kuliah
            </Nav.Link>
          </Nav>
          <Nav>
            {/* Logout */}
            <Button  as={Link} to="/home" variant="warning" style={{ fontWeight: "500" }}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarAdminCom;