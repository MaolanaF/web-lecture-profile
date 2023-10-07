import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'; // Impor CSS Bootstrap

const ListPenelitianComponent = () => {
  const [penelitianList, setPenelitianList] = useState([]);

  useEffect(() => {
    // Lakukan permintaan GET ke backend endpoint untuk mendapatkan daftar dosen
    axios.get('http://localhost:3100/penelitian')
      .then((response) => {
        setPenelitianList(response.data); // Mengatur data dosen ke dalam state
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []); // Gunakan array kosong agar useEffect dijalankan hanya sekali saat komponen pertama kali dimuat

  // Fungsi untuk menghapus data penelitian berdasarkan ID
  const handleDelete = (id) => {
    // Lakukan permintaan DELETE ke backend endpoint dengan ID yang sesuai
    axios.delete(`http://localhost:3100/penelitian/${id}`)
      .then(() => {
        // Hapus data dosen dari state
        setPenelitianList((prevPenelitianList) => prevPenelitianList.filter((penelitian) => penelitian.id_penelitian !== id));
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="container mt-4">
      <h2>List Penelitian</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID Penelitian</th>
            <th>Judul</th>
            <th>Tanggal Publikasi</th>
            <th>Bidang</th>
            <th>Penulis</th>
            <th>Link Penelitian</th>
          </tr>
        </thead>
        <tbody>
          {penelitianList.map((penelitian) => (
            <tr key={penelitian.id_penelitian}>
              <td>{penelitian.id_penelitian}</td>
              <td>{penelitian.judul}</td>
              <td>{penelitian.tanggal_publikasi}</td>
              <td>{penelitian.bidang}</td>
              <td>{penelitian.author}</td>
              <td>{penelitian.link_penelitian}</td>
              <td>
              <button className="btn btn-danger btn-sm ml-2"
                  // Tambahkan fungsi onClick untuk tombol delete
                  onClick={() => { handleDelete(penelitian.id_penelitian);}}
                >
                  Delete
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPenelitianComponent;
