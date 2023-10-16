import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsChevronDoubleRight } from 'react-icons/bs';

const ListDosenComponent = () => {
    const [dosenList, setDosenList] = useState([]);
  
    useEffect(() => {
      // Lakukan permintaan GET ke backend endpoint untuk mendapatkan daftar dosen
      axios.get('http://localhost:3100/dosen')
        .then((response) => {
          setDosenList(response.data); // Mengatur data dosen ke dalam state
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    }, []); // Gunakan array kosong agar useEffect dijalankan hanya sekali saat komponen pertama kali dimuat
    
    const [activeTab, setActiveTab] = useState('home');

    // Handler untuk mengubah tab aktif
    const handleTabChange = (eventKey) => {
      setActiveTab(eventKey);
    };

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="title-box text-center">
                <h3 className="title-a mt-5">List Dosen</h3>
                <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="line-mf"></div>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            {dosenList.map((dosen, index) => (
              <Col md={4} key={index}>
                <Card className="work-box" style={{ height: '100%' }}>
                  <a href={dosen.image} data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img mb-2">
                      <Image src="../assets/img/profile_img.png" alt="img" fluid />
                    </div>
                  </a>
                  <div className="work-content" style={{ height: '100%' }}>
                    <Row>
                      <Col sm={8}>
                        <h5 className="w-title">{dosen.nama}</h5>
                        <div className="w-more">
                          <span className="w-ctegory">{dosen.jabatan}</span> / <span className="w-date">{dosen.jurusan}</span>
                        </div>
                      </Col>
                      <Col sm={4} className="pl-0">
                        <div className="w-like">
                          <Link to={{ pathname: `/DosenProfile/${dosen.id_dosen}`}}>
                            <BsChevronDoubleRight /> {/* Menggunakan ikon React Bootstrap */}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  };
  
  export default ListDosenComponent;
  