import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <table className="table">
        <thead>
          <tr>
            <th>ID Dosen</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jabatan</th>
            <th>Jurusan</th>
          </tr>
        </thead>
        <tbody>
          {dosenList.map((dosen) => (
            <tr key={dosen.id_dosen}>
              <td>{dosen.id_dosen}</td>
              <td>{dosen.nama}</td>
              <td>{dosen.email}</td>
              <td>{dosen.jabatan}</td>
              <td>{dosen.jurusan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDosenComponent;
