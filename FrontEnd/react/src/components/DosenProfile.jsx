import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image, Tabs, Tab } from "react-bootstrap";
import ListRiwayatPengajaran from "../components/riwayat_pengajaran/ListRiwayatPengajaran";

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
            <div className="title-box text-center">
              <h3 className="title-a">Profile Dosen</h3>
              <p className="subtitle-a">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={6}>
                    <Image src="" alt="" fluid />
                  </Col>
                  <Col lg={6}>
                    <blockquote className="blockquote mb-0">
                      <p className="h6">{formData.id_dosen}</p>
                      <p className="h6">{formData.nama}</p>
                      <p className="h6">{formData.jurusan}</p>
                      <p className="h6">{formData.jabatan}</p>
                    </blockquote>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3 mt-5"
              fill
            >
              <Tab eventKey="Riwayat Pendidikan" title="Riwayat Pendidikan">
                Riwayat Pendidikan
              </Tab>
              <Tab eventKey="Riwayat Pengajaran" title="Riwayat Pengajaran">
                <ListRiwayatPengajaran id={id} />
              </Tab>
              <Tab eventKey="Riwayat Penelitian" title="Riwayat Penelitian">
                Riwayat Penelitian
              </Tab>
              <Tab eventKey="Riwayat PKM" title="Riwayat PKM">
                Riwayat PKM
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DosenDetailComponent;
