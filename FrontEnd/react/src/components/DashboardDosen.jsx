import React, { useEffect, useState } from "react";
import axios from "axios";
import EditDosenComponent from './dosen/EditDosenComponent';
import { Container, Row, Col, Card, Image, Tabs, Tab, Modal } from "react-bootstrap";
import ListRiwayatPendidikan from "./pendidikan/ListPendidikan";
import ListRiwayatPendidikan_Dosen from "./pendidikan/ListRiwayatPendidikan_Dosen";
import ListRiwayatPengajaran_Dosen from "./riwayat_pengajaran/ListRiwayatPengajaran_Dosen";
import ListRiwayatPenelitian_Dosen from "./riwayat_penelitian/ListRiwayatPenelitian_Dosen";
import AddAuthorRiwayatPenelitian from "./riwayat_penelitian/AddRiwayatPenelitianComponent";
import ListRiwayatPkm_Dosen from "./riwayatPkm/ListRiwayatPKM_Dosen"
import AddAuthorRiwayatPkm from "./riwayatPkm/AddRiwayatPKMComponent";
import { FaGraduationCap, FaChalkboardTeacher, FaFlask, FaBook, FaEdit } from 'react-icons/fa';
import './style.css';

function DashboardDosenDetailComponent({ id }) {
  const [formData, setFormData] = useState({
    id_dosen: "",
    nama: "",
    email: "",
    jabatan: "",
    jurusan: "",
    id_user: "",
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDosenId, setSelectedDosenId] = useState(null);

  const handleShowEditModal = (id) => {
    setSelectedDosenId(id);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };


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
    <section>
      <Container className="margin-class">
        <Row>
          <Col lg={12}>
            <div className="title-box">
              <h3 className="title-a text-center">Profil Dosen</h3>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Card>
              <Card.Body>
                <Row>
                    <Col md={5} style={{ textAlign:"center" }}>
                      <Image src="https://travellersworldwide.com/wp-content/uploads/2023/02/Shutterstock_1765167053.jpg"
                      style={{ width: "80%", height: "auto" }}/>
                    </Col>
                    <Col md={7}>
                      <Row>
                      <p className="h1 mb-3" style={{ fontSize: "1.7rem" }}>{formData.nama}</p>
                      <p>Jurusan&nbsp;&nbsp;&nbsp;: {formData.jurusan}</p>
                      <p>Jabatan&nbsp;&nbsp;&nbsp;: {formData.jabatan}</p>
                      <p>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {formData.email}</p>
                      </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Body>
                <p className="h1 mb-3" style={{ fontSize: "1.3rem" }}>Riwayat Pendidikan</p>
                <ListRiwayatPendidikan id={id} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Tabs
              defaultActiveKey="Riwayat Pendidikan"
              id="fill-tab-example"
              className="mb-3 mt-5 tab-nav h6"
              fill
            >
              <Tab eventKey="Riwayat Pendidikan" title={<><FaGraduationCap /> Riwayat Pendidikan</>}>
                <ListRiwayatPendidikan_Dosen id={id} />
              </Tab>
              <Tab eventKey="Riwayat Pengajaran" title={<><FaChalkboardTeacher /> Riwayat Pengajaran</>}>
                  <ListRiwayatPengajaran_Dosen id={id} />
              </Tab>
              <Tab eventKey="Riwayat Penelitian" title={<><FaFlask /> Riwayat Penelitian</>}>
              <div className="margin-class">
                  <ListRiwayatPenelitian_Dosen id={id} />
              </div>
              </Tab>
              <Tab eventKey="Riwayat PKM" title={<><FaBook /> Riwayat PKM</>}>
                <ListRiwayatPkm_Dosen id={id} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
          <Modal.Title>Edit Dosen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditDosenComponent id={selectedDosenId} handleClose={handleCloseEditModal} />
          </Modal.Body>
        </Modal>
      </Container>
      <footer style={{ height: 80 }}/>
    </section>
  );
}

export default DashboardDosenDetailComponent;
