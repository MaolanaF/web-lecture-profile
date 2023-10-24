import React, { useEffect, useState } from "react";
import axios from "axios";
import AddAuthorRiwayatPenelitian from "../components/riwayat_penelitian/AddRiwayatPenelitianComponent";
import EditDosenComponent from '../components/dosen/EditDosenComponent';
import { Container, Row, Col, Card, Image, Tabs, Tab, Modal } from "react-bootstrap";
import ListRiwayatPendidikan_Dosen from "../components/pendidikan/ListRiwayatPendidikan_Dosen";
import ListRiwayatPengajaran_Dosen from "../components/riwayat_pengajaran/ListRiwayatPengajaran_Dosen";
import ListRiwayatPenelitian_Dosen from "../components/riwayat_penelitian/ListRiwayatPenelitian_Dosen";
// import ListRiwayatPkm_Dosen from "../component/riwayatPkm/ListRiwayat"
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
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Row>
                    <Col md={6} style={{ textAlign:"center"}}>
                    <Image src="https://th.bing.com/th/id/R.4af6ce5416a72bbbc3ade4dc082b8753?rik=FL6eQf6dHNAF5g&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fprofile-icon.png&ehk=7%2bekY9GHPFrkSaye%2f6RZA7u%2fs7gpZ9GMP5phoOj6j4U%3d&risl=&pid=ImgRaw&r=0"
                    style={{ width: "45%", height: "auto" }} />
                    </Col>
                    <Col md={6}>
                      <Row>
                      <p className="h1 mb-3">{formData.nama}
                      <button type="button" className="btn btn-primary btn-sm ml-5" onClick={() => handleShowEditModal(id)}>
                            <FaEdit />
                      </button>
                      </p>
                      
                        <Col sm={3} style={{ fontWeight:"normal" }}>
                          <p>Jurusan</p>
                          <p>Jabatan</p>
                          <p>Email</p>                          
                        </Col>
                        <Col sm={9}>
                          <p>: {formData.jurusan}</p>
                          <p>: {formData.jabatan}</p>
                          <p>: {formData.email}</p>
                        </Col>
                      </Row>
                  </Col>
                </Row>
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
              <Tab eventKey="Author Riwayat Penelitian" title={<><FaFlask /> Author Penelitian</>}>
                <AddAuthorRiwayatPenelitian/>
              </Tab>
              <Tab eventKey="Riwayat PKM" title={<><FaBook /> Riwayat PKM</>}>
                {/* <ListRiwayatPKM id={id} /> */}
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
    </section>
  );
}

export default DashboardDosenDetailComponent;
