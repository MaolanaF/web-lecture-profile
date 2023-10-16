import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <header>
      {/* Navbar */}
      <Navbar bg="white" expand="lg">
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
    </Navbar>
      {/* Navbar */}
      {/* Background image */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            'url("https://kuliah-sabtu-minggu.com/wp-content/uploads/2023/02/download-2-1-777x437.jpg")',
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Politeknik Negeri Bandung</h1>
              <h4 className="mb-3">Profile Dosen</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Background image */}
    </header>
  );
};

export default MyNavbar;
