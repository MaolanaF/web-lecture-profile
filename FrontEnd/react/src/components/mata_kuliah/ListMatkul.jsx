import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ListMatkulComponent = () => {
  const [matkulList, setMatkulList] = useState([]);

  useEffect(() => {
    // Lakukan permintaan GET ke backend endpoint untuk mendapatkan daftar dosen
    axios.get('http://localhost:3100/mata_kuliah')
      .then((response) => {
        setMatkulList(response.data); // Mengatur data dosen ke dalam state
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []); // Gunakan array kosong agar useEffect dijalankan hanya sekali saat komponen pertama kali dimuat

  // Fungsi untuk menghapus data dosen berdasarkan ID
  const handleDelete = (id) => {
    // Lakukan permintaan DELETE ke backend endpoint dengan ID yang sesuai
    axios.delete(`http://localhost:3100/mata_kuliah/${id}`)
      .then(() => {
        // Hapus data dosen dari state
        setMatkulList((prevMatkulList) => prevMatkulList.filter((mata_kuliah) => mata_kuliah.id_matkul !== id));
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="container mt-4 border">
      <h2>List Mata Kuliah</h2>
      <table className="table">
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><Link to={{ pathname: `/mata_kuliah/insert` }}>
                <button type="button" className="btn btn-success btn-sm"> Tambah </button>
                </Link>
            </td>
          </tr>
          <tr>
            <th>ID Matkul</th>
            <th>Kode Matkul</th>
            <th>Nama Matkul</th>
            <th>Semester</th>
            <th>Kode Kelas</th>
            <th>Perguruan Tinggi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {matkulList.map((mata_kuliah) => (
            <tr key={mata_kuliah.id_matkul}>
              <td>{mata_kuliah.id_matkul}</td>
              <td>{mata_kuliah.kode_matkul}</td>
              <td>{mata_kuliah.nama_matkul}</td>
              <td>{mata_kuliah.semester}</td>
              <td>{mata_kuliah.kode_kelas}</td>
              <td>{mata_kuliah.perguruan_tinggi}</td>
              <td>
              <Link to={{ pathname: `/mata_kuliah/edit/${mata_kuliah.id_matkul}` }}>
                <button type="button" className="btn btn-sm btn-success">
                  Edit
                </button>
              </Link>
              <button className="btn btn-danger btn-sm ml-2"
                  // Tambahkan fungsi onClick untuk tombol delete
                  onClick={() => { handleDelete(mata_kuliah.id_matkul);}}
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

export default ListMatkulComponent;
