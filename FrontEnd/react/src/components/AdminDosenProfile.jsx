import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image, Tabs, Tab } from 'react-bootstrap';
import NavbarCom from "../components/NavbarCom";
import PenelitianCrud from "../components/penelitian/ListPenelitian";
import MataKuliahCrud from "../components/mata_kuliah/ListMatkul";
import DosenCrud from "../components/dosen/ListDosen";


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
      <NavbarCom/>
      <Container className="mt-5">
        <Row>
            <Col lg={12}>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3 mt-5"
                fill
            >
                <Tab eventKey="Riwayat Pendidikan" title="Dosen">
                <DosenCrud/>
                </Tab>
                <Tab eventKey="Riwayat Pengajaran" title="Riwayat Pengajaran">
                <MataKuliahCrud/>
                </Tab>
                <Tab eventKey="Riwayat Penelitian" title="Riwayat Penelitian">
                <PenelitianCrud/>
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
