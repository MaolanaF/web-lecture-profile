import React, { useState, useEffect } from "react";
import axios from "axios";

const ListRiwayatPengajaranCom = ({ id }) => {
  const [listRiwayatPengajaran, setlistRiwayatPengajaran] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3100/profile_dosen/${id}`)
      .then((response) => {
        setlistRiwayatPengajaran(response.data); // Mengatur data dosen ke dalam state
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []);

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>Kode Matkul</th>
            <th>Nama Matkul</th>
            <th>Semester</th>
            <th>Kode Matkul</th>
            <th>Perguruan tinggi</th>
          </tr>
        </thead>
        <tbody>
          {listRiwayatPengajaran.map((riwayat_pengajaran) => (
            <tr key={riwayat_pengajaran.kode_matkul}>
              <td>{riwayat_pengajaran.kode_matkul}</td>
              <td>{riwayat_pengajaran.nama_matkul}</td>
              <td>{riwayat_pengajaran.semester}</td>
              <td>{riwayat_pengajaran.kode_kelas}</td>
              <td>{riwayat_pengajaran.perguruan_tinggi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRiwayatPengajaranCom;
