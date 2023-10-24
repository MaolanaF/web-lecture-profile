import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { FaFile } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "../style.css";

const ListRiwayatPenelitianDetailCom = ({ id }) => {
  const [riwayatPenelitian, setRiwayatPenelitian] = useState([]);
  const [penelitian, setPenelitian] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [riwayatResponse, penelitianResponse] = await Promise.all([
          axios.get(`http://localhost:3100/profile_dosen/riwayat_penelitian/detail/${id}`),
          axios.get(`http://localhost:3100/penelitian/dosen/${id}`)
        ]);

        setRiwayatPenelitian(riwayatResponse.data);
        setPenelitian(penelitianResponse.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <div className="container margin-class">
      <Row>
        <Col md={12}>
          <Card.Title>{penelitian[0]?.judul}</Card.Title>
          <Card className="card-blog mt-2">
            {riwayatPenelitian.map((author) => (
              <Link key={author.id_riwayatpenelitian} to={`/DosenProfile/${author.id_dosen}`}>
                <Card.Title >{author.nama}</Card.Title>
              </Link>
            ))}
            <div className="post-date">
                <span className="bi bi-clock"></span>{" "}
                {formatDate(riwayatPenelitian[0]?.tanggal_publikasi)}
              </div>
            <Card.Body>
              <Card.Text><a className="btn btn-primary btn-sm mr-2" target="_blank" href={'http://localhost:3100/static/uploads/penelitian/'+riwayatPenelitian[0]?.link_penelitian}><FaFile></FaFile> Lihat File</a></Card.Text>
            </Card.Body>
            <Card.Footer>
              
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ListRiwayatPenelitianDetailCom;
