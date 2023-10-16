import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">List Dosen</h3>
              <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {dosenList.map((dosen, index) => (
            <div className="col-md-4" key={index}>
              <div className="work-box">
                <a href={dosen.image} data-gallery="portfolioGallery" className="portfolio-lightbox">
                  <div className="work-img">
                    {/* <img src={dosen.image} alt="" className="img-fluid" /> */}
                    <img src="https://th.bing.com/th/id/R.4af6ce5416a72bbbc3ade4dc082b8753?rik=FL6eQf6dHNAF5g&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fprofile-icon.png&ehk=7%2bekY9GHPFrkSaye%2f6RZA7u%2fs7gpZ9GMP5phoOj6j4U%3d&risl=&pid=ImgRaw&r=0"
                    style={{ width: "60%", height: "auto" }}/>
                  </div>
                </a>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">{dosen.nama}</h2>
                      <div className="w-more">
                        <span className="w-ctegory">{dosen.jabatan}</span> / <span className="w-date">{dosen.jurusan}</span>
                      </div>
                    </div>
                    <div className="col-sm-4 pl-0">
                      <div className="w-like">
                      {/* <Link to={{ pathname: `/DosenProfile/${dosen.id_dosen}`}}> */}
                        <span className="bi bi-chevron-double-right"></span>
                      {/* </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
    );
  };
  
  export default ListDosenComponent;
  