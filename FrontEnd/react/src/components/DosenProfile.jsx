import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image, Tabs, Tab } from "react-bootstrap";
import ListRiwayatPendidikan from "../components/pendidikan/ListPendidikan";
import ListRiwayatPengajaran from "../components/riwayat_pengajaran/ListRiwayatPengajaran";
import ListRiwayatPenelitian from "../components/riwayat_penelitian/ListRiwayatPenelitian";
import ListRiwayatPKM from "../components/riwayatPkm/ListRiwayatPKM"
import { FaChalkboardTeacher, FaFlask, FaBook } from 'react-icons/fa';
import './style.css';

function DosenDetailComponent({ id }) {
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
    <section>
      <Container className="margin-class">
        <Row>
          <Col lg={12}>
            <div className="title-box">
              <h3 className="title-a text-center">Profil Dosen</h3>
              <div className="line-mf"></div>
              <a className="subtitle-a" href="/home">List Dosen</a>
              <a className="subtitle-a"> / {formData.nama}</a>
              
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
              defaultActiveKey="Riwayat Pengajaran"
              id="fill-tab-example"
              className="mb-3 mt-5 tab-nav h6"
              fill
            >
              {/* <Tab eventKey="Riwayat Pendidikan" title={<><FaGraduationCap /> Riwayat Pendidikan</>}>
                <ListRiwayatPendidikan id={id} />
              </Tab> */}
              <Tab eventKey="Riwayat Pengajaran" title={<><FaChalkboardTeacher /> Riwayat Pengajaran</>}>
                <ListRiwayatPengajaran id={id} />
              </Tab>
              <Tab eventKey="Riwayat Penelitian" title={<><FaFlask /> Riwayat Penelitian</>}>
                <ListRiwayatPenelitian id={id} />
              </Tab>
              <Tab eventKey="Riwayat PKM" title={<><FaBook /> Riwayat PKM</>}>
                <ListRiwayatPKM id={id} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <footer style={{ height: 80 }}/>
      </Container>
    </section>
  );
}

export default DosenDetailComponent;
