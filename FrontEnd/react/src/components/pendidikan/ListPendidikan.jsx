import React, { useState, useEffect } from "react";
import axios from "axios";

const ListRiwayatPendidikanCom = ({ id }) => {
  const [listRiwayatPendidikan, setlistRiwayatPendidikan] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3100/profile_dosen/riwayat_pendidikan/${id}`)
      .then((response) => {
        setlistRiwayatPendidikan(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Jenjang Pendidikan</th>
            <th>Nama Institusi</th>
            <th>Tahun Lulus</th>
          </tr>
        </thead>
        <tbody>
          {listRiwayatPendidikan.map((riwayat_pendidikan) => (
            <tr key={riwayat_pendidikan.id_pendidikan}>
              <td>{riwayat_pendidikan.jenjang_pendidikan}</td>
              <td>{riwayat_pendidikan.nama_institusi}</td>
              <td>{riwayat_pendidikan.tahun_lulus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRiwayatPendidikanCom;