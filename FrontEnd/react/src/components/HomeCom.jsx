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

    return (
    <>
      {/* Background image */}
      <div
        className="p-5 text-center bg-image"
        style={{
        backgroundImage:
        'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://e-learning.polban.ac.id/pluginfile.php/1/theme_lambda/carousel_image_11/1618326726/PASCA.jpg")',
        height: 400,
      }}
      >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h4 className="mb-3" style={{ color:"#FF7F00" }}>Politeknik Negeri Bandung</h4>
          <h1 className="mb-3" style={{ color:"#00008B", fontWeight:"bold", fontSize:"40" }}>PROFIL DOSEN</h1>
        </div>
      </div>
      </div>
      {/* Background image */}
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
          <Row className="g-4" >
            {dosenList.map((dosen, index) => (
              <Col md={4} key={index} className="justify-content-center text-align-center d-flex">
                <Card className="work-box" style={{ height: '100%', width:'80%'}}>
                  <a href={dosen.image} data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img mb-2">
                      <Image src="https://th.bing.com/th/id/R.4af6ce5416a72bbbc3ade4dc082b8753?rik=FL6eQf6dHNAF5g&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fprofile-icon.png&ehk=7%2bekY9GHPFrkSaye%2f6RZA7u%2fs7gpZ9GMP5phoOj6j4U%3d&risl=&pid=ImgRaw&r=0"
                    style={{ width: "30%", height: "auto", marginBottom:"15px" }} />
                    </div>
                  </a>
                  <div className="work-content" style={{ height: '100%' }}>
                    <Row>
                      <Col sm={11}>
                        <h5 className="w-title">{dosen.nama}</h5>
                        <div className="w-more">
                          <span className="w-ctegory">{dosen.jabatan}</span> / <span className="w-date">{dosen.jurusan}</span>
                        </div>
                      </Col>
                      <Col sm={1} className="pl-0">
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
    </>
    );
  };
  
  export default ListDosenComponent;
  