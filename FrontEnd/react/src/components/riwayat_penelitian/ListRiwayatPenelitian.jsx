import React, { useState, useEffect } from "react";
import axios from "axios";

const ListRiwayatPenelitianCom = ({ id }) => {
  const [listRiwayatPenelitian, setlistRiwayatPenelitian] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3100/profile_dosen/riwayat_penelitian/${id}`)
      .then((response) => {
        setlistRiwayatPenelitian(response.data); // Mengatur data dosen ke dalam state
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
            <th>Judul</th>
            <th>Tanggal Publikasi</th>
            <th>Bidang</th>
            <th>Author</th>
            <th>Link Penelitian</th>
          </tr>
        </thead>
        <tbody>
          {listRiwayatPenelitian.map((riwayat_penelitian) => (
            <tr key={riwayat_penelitian.judul}>
              <td>{riwayat_penelitian.judul}</td>
              <td>{riwayat_penelitian.tanggal_publikasi}</td>
              <td>{riwayat_penelitian.bidang}</td>
              <td>{riwayat_penelitian.author}</td>
              <td>{riwayat_penelitian.link_penelitian}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListRiwayatPenelitianCom;
