import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image, Tabs, Tab } from "react-bootstrap";
import ListRiwayatPengajaran from "../components/riwayat_pengajaran/ListRiwayatPengajaran";
import { FaGraduationCap, FaChalkboardTeacher, FaFlask, FaBook } from 'react-icons/fa';

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
      <Container>
        <Row>
          <Col lg={12}>
            <div className="title-box">
              <h3 className="title-a text-center">Profil Dosen</h3>
              <a className="subtitle-a" href="/home">List Dosen</a>
              <a className="subtitle-a"> / {formData.nama}</a>
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
                      <p className="h1 mb-3">{formData.nama}</p>
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
                Riwayat Pendidikan
                {/* <ListRiwayatPendidikan id={id} /> */}
              </Tab>
              <Tab eventKey="Riwayat Pengajaran" title={<><FaChalkboardTeacher /> Riwayat Pengajaran</>}>
                <ListRiwayatPengajaran id={id} />
              </Tab>
              <Tab eventKey="Riwayat Penelitian" title={<><FaFlask /> Riwayat Penelitian</>}>
                Riwayat Penelitian
                {/* <ListRiwayatPenelitian id={id} /> */}
              </Tab>
              <Tab eventKey="Riwayat PKM" title={<><FaBook /> Riwayat PKM</>}>
                Riwayat PKM
                {/* <ListRiwayatPKM id={id} /> */}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DosenDetailComponent;
