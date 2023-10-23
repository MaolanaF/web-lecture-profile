import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsChevronDoubleRight} from 'react-icons/bs';  
import { FaUsers, FaFlask, FaBook} from 'react-icons/fa';  
import "./style.css"; 

const ListDosenComponent = () => {
    const [dosenList, setDosenList] = useState([]);
    const [penelitianList, setPenelitianList] = useState([]);
    const [pkmList, setPKMList] = useState([]);
    const [latestPenelitian, setLatestPenelitian] = useState([]);
    const [latestPKM, setLatestPKM] = useState([]);
    // Menghitung jumlah data dalam array dosenList
    const totalDosen = dosenList.length;
    const totalPenelitian = penelitianList.length;
    const totalPKM = pkmList.length;
  
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
  
      axios.get('http://localhost:3100/penelitian')
      .then((response) => {
        setPenelitianList(response.data);
        // Ambil 3 penelitian terbaru
        const sortedPenelitian = response.data.slice().sort((a, b) => b.tanggal_publikasi - a.tanggal_publikasi).slice(0, 3);
        setLatestPenelitian(sortedPenelitian);
      })
      .catch((error) => {
        console.error(error);
      });

      axios.get('http://localhost:3100/pkms')
      .then((response) => {
        setPKMList(response.data);
        // Ambil 3 PKM terbaru
        const sortedPKM = response.data.slice().sort((a, b) => b.tahun_pkm - a.tahun_pkm).slice(0, 3);
        setLatestPKM(sortedPKM);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   // Function to format the date
   const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

    return (
    <>
      {/* Background image */}
      <section id="beranda">
        <div className="my-jumbotron">
          <div className="my-content">
            <h4>Politeknik Negeri Bandung</h4>
            <h1>PROFIL DOSEN</h1>
          </div>
        </div>
      </section>
      
      {/* Counting */}
       <div className="section-counter paralax-mf">
        <div className="overlay-mf"></div>
        <Container className="position-relative">
          <Row>
            <Col sm={4} lg={4}>
              <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><FaUsers size={34} color="blue" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="450" data-purecounter-duration="1" className="counter purecounter"></p>
                  <span className="counter-number">{totalDosen}</span>
                  <span className="counter-text">DOSEN</span>
                </div>
              </div>
            </Col>
            <Col sm={4} lg={4}>
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><FaFlask size={27} color="blue" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" className="counter purecounter"></p>
                  <span className="counter-number">{totalPenelitian}</span>
                  <span className="counter-text">PENELITIAN</span>
                </div>
              </div>
            </Col>
            <Col sm={4} lg={4}>
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><FaBook size={27} color="blue" /></span>
                </div>
                <div className="counter-num">
                  <p data-purecounter-start="0" data-purecounter-end="550" data-purecounter-duration="1" className="counter purecounter"></p>
                  <span className="counter-number">{totalPKM}</span>
                  <span className="counter-text">PKM</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Background image */}
      <section id="dosen" className="portfolio-mf sect-pt4 route">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="title-box text-center">
                <h4 className="title-a mt-2">Dosen</h4>
                <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="line-mf"></div>
              </div>
            </Col>
          </Row>
          <Row className="g-4 mt-3">
            {dosenList.map((dosen, index) => (
              <Col md={3} key={index}>
                <Link to={{ pathname: `/DosenProfile/${dosen.id_dosen}` }}>
                  <Card className="dosen-box">
                      <div className="work-img mb-4">
                        <Image
                          src="https://th.bing.com/th/id/R.4af6ce5416a72bbbc3ade4dc082b8753?rik=FL6eQf6dHNAF5g&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fprofile-icon.png&ehk=7%2bekY9GHPFrkSaye%2f6RZA7u%2fs7gpZ9GMP5phoOj6j4U%3d&risl=&pid=ImgRaw&r=0"
                          style={{ width: "50%", height: "auto" }}
                        />
                      </div>
                    <div className="work-content">
                      <h5 className="w-title">{dosen.nama}</h5>
                      <div className="w-more">
                        <span className="w-ctegory">{dosen.jabatan}</span> / <span className="w-date">{dosen.jurusan}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section id="penelitian" className="blog-mf sect-pt4 route">
        <Container>
          <Row>
            <Col>
              <div className="title-box text-center">
                <h3 className="title-a mt-5">Penelitian</h3>
                <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className="line-mf mb-5"></div>
              </div>
            </Col>
          </Row>
          <Row>
            {latestPenelitian.map((penelitian, index) => (
              <Col md={4} key={index}>
                <Card className="card-blog mt-2">
                  <Card.Img variant="top" src={penelitian.image} alt="" className="img-fluid" />
                  <Card.Body>
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">{penelitian.bidang}</h6>
                      </div>
                    </div>
                    <Card.Title>
                      <a href={penelitian.link}>{penelitian.judul}</a>
                    </Card.Title>
                    <Card.Text>{penelitian.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className="post-author">
                      <a href={penelitian.authorProfileLink}>
                        <Image src={penelitian.authorImage} alt="" className="avatar rounded-circle" />
                        <span className="author">{penelitian.author}</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> {formatDate(penelitian.tanggal_publikasi)}
                    </div>
                  </Card.Footer>
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
  