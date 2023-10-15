import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

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
        <div className="container mt-4">
        <h2>List Dosen</h2>
        <div className="row">
          {dosenList.map((dosen) => (
            <div key={dosen.id_dosen} className="col-3 mt-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{dosen.nama}</h5>
                  <p className="card-text">Email: {dosen.email}</p>
                  <p className="card-text">Jabatan: {dosen.jabatan}</p>
                  <p className="card-text">Jurusan: {dosen.jurusan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ListDosenComponent;
  