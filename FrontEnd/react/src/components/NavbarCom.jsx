import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink

const MyNavbar = () => {
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
            {/* About */}
            <Nav.Link href="#" style={{ color: "black" }}>
            <ScrollLink
              activeClass=""
              to="beranda"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Beranda
            </ScrollLink>
            </Nav.Link>
            {/* About */}
            <Nav.Link href="#" style={{ color: "black" }}>
            <ScrollLink
              activeClass=""
              to="dosen"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Dosen
            </ScrollLink>
            </Nav.Link>
            <Nav.Link href="#" style={{ color: "black" }}>
            <ScrollLink
              activeClass="active"
              to="penelitian"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Penelitian
            </ScrollLink>
            </Nav.Link>
          </Nav>

          <Nav>
            {/* Login */}
            <Link to={{ pathname: `/login` }}>
              <Button variant="warning" style={{ fontWeight: "500" }}>
                LOGIN
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
