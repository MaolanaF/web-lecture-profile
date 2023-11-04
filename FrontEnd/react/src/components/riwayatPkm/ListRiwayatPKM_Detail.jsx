import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListRiwayatPKMComponent = ({ id }) => {
  // State untuk menyimpan data riwayat PKM
  const [riwayatPKM, setRiwayatPKM] = useState([]);

  // State untuk menyimpan data PKM
  const [pkm, setPKM] = useState([]);

  // State untuk menangani loading
  const [loading, setLoading] = useState(true);

  // State untuk menangani error
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mendapatkan data riwayat PKM dan PKM berdasarkan ID dosen
        const [riwayatResponse, pkmResponse] = await Promise.all([
          axios.get(`http://localhost:3100/profile_dosen/riwayatpkm/detail/${id}`),
          axios.get(`http://localhost:3100/pkm/dosen/${id}`)
        ]);

        setRiwayatPKM(riwayatResponse.data);
        setPKM(pkmResponse.data);
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
    <div className="container">
      <Row>
        <Col md={12}>
          <Card.Title>{pkm[0]?.judul_pkm}</Card.Title>
          <Card className="card-blog mt-2">
            {riwayatPKM.map((kontributor) => (
              // Link ke profil dosen berdasarkan ID dosen
              <Link key={kontributor.id_riwayatpkm} to={`/DosenProfile/${kontributor.id_dosen}`}>
                <Card.Title>{kontributor.nama}</Card.Title>
              </Link>
            ))}
            <Card.Body>
              <Card.Text>{pkm[0]?.link_pkm}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="post-date">
                <span className="bi bi-clock"></span>{" "}
                {riwayatPKM[0]?.tahun_pkm}
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ListRiwayatPKMComponent;