import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import ListRiwayatPenelitian from "../components/riwayat_penelitian/ListRiwayatPenelitian_Dosen";
import { FaGraduationCap, FaChalkboardTeacher, FaFlask, FaBook } from 'react-icons/fa';

function NavbarDosen({ id }) {
  const [formData, setFormData] = useState({
    id_dosen: "",
    nama: "",
    email: "",
    jabatan: "",
    jurusan: "",
    id_user: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3100/dosen/${id}`);
        const rows = response.data.rows[0];
        setFormData(response.data.rows[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);


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
              {/* <Nav.Link as={Link} to={`/dashboard_dosen/dosen/${id}`}>
                Profil
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to={`/dashboard_dosen/pendidikan/${id}`}>
                Pendidikan
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to={`/dashboard_dosen/penelitian/${id}`}>
                Penelitian
              </Nav.Link> 
              <Nav.Link as={Link} to={`/dashboard_dosen/author_penelitian/:${id}`}>
                Kontributor Penelitian
              </Nav.Link>  */}
              {/* <Nav.Link as={Link} to={`/dashboard_dosen/pkm/${id}`}>
                PKM
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
}

export default NavbarDosen;
