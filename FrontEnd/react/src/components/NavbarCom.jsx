import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
  return (
    <header>
      {/* Navbar */}
      {/* <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-white border">
        <div className="container-fluid border">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Coba
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      {/* Background image */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            'url("https://e-learning.polban.ac.id/pluginfile.php/1/theme_lambda/carousel_image_11/1618326726/PASCA.jpg")',
          height: 700,
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h6 className="mb-3">Politeknik Negeri Bandung</h6>
            <h1 className="mb-3">Profile Dosen</h1>
          </div>
        </div>
      </div>
      {/* Background image */}
    </header>
  );
};

export default MyNavbar;
