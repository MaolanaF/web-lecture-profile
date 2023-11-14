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
    <div className="mt-4" style={{ textAlign: "left" }}>
      <ul style={{ paddingLeft: "20px" }}>
        {listRiwayatPendidikan.map((riwayat_pendidikan) => (
          <li key={riwayat_pendidikan.id_pendidikan}>
            <div>
              <p>{riwayat_pendidikan.jenjang_pendidikan}, {riwayat_pendidikan.tahun_lulus}, {riwayat_pendidikan.nama_institusi}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>  
  );
};

export default ListRiwayatPendidikanCom;