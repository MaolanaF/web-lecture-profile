import React, { useEffect, useState } from "react";
import axios from "axios";


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
                    <img src={dosen.image} alt="" className="img-fluid" />
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
                      {/* <Link to={{ pathname: `/dosen-details/${dosen.id_dosen}`}}> */}
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
    );
  };
  
  export default ListDosenComponent;
  