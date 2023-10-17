import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ListRiwayatComponent = () => {
  const [RiwayatList, setRiwayatList] = useState([]);

  useEffect(() => {
    // Lakukan permintaan GET ke backend endpoint untuk mendapatkan daftar dosen
    axios.get('http://localhost:3100/riwayat_pendidikan')
      .then((response) => {
        setRiwayatList(response.data); // Mengatur data dosen ke dalam state
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []); // Gunakan array kosong agar useEffect dijalankan hanya sekali saat komponen pertama kali dimuat

  // Fungsi untuk menghapus data dosen berdasarkan ID
  const handleDelete = (id) => {
    // Lakukan permintaan DELETE ke backend endpoint dengan ID yang sesuai
    axios.delete(`http://localhost:3100/riwayat_pendidikan/${id}`)
      .then(() => {
        // Hapus data dosen dari state
        setRiwayatList((prevRiwayatList) => prevRiwayatList.filter((riwayat_pendidikan) => riwayat_pendidikan.id_pendidikan !== id));
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="container mt-4">
      <h2>List Pendidikan Dosen</h2>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>jenjang pendidikan</th>
            <th>nama institusi</th>
            <th>tahun lulus</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {RiwayatList.map((riwayat_pendidikan) => (
            <tr key={riwayat_pendidikan.id_pendidikan}>
              <td>{riwayat_pendidikan.id_pendidikan}</td>
              <td>{riwayat_pendidikan.jenjang_pendidikan}</td>
              <td>{riwayat_pendidikan.nama_institusi}</td>
              <td>{riwayat_pendidikan.tahun_lulus}</td>
              <td>
                <Link to={{ pathname: `/riwayat_pendidikan/edit/${riwayat_pendidikan.id_pendidikan}` }}>
                  <button type="button" className="btn btn-success btn-sm ml-2">
                    Edit
                  </button>
                </Link>
                <button className="btn btn-danger btn-sm ml-2"
                  // Tambahkan fungsi onClick untuk tombol delete
                  onClick={() => { handleDelete(riwayat_pendidikan.id_pendidikan);}}
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

export default ListRiwayatComponent;
