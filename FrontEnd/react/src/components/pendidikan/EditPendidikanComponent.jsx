import React, { useEffect, useState } from "react";
import axios from "axios";


function EditRiwayatComponent({ id }) {
  const [formData, setFormData] = useState({
    id_pendidikan: "",
    jenjang_pendidikan: "",
    nama_institusi: "",
    tahun_lulus: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3100/riwayat_pendidikan/${id}`);
        const rows = response.data.rows[0];
        setFormData(response.data.rows[0]);
        console.log(id);
        console.log(rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id]);

  // Function to handle input changes for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle the form submission for updating penelitian
  const handleUpdatePenelitian = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3100/riwayat_pendidikan/${id}`, formData);
      console.log(response.data);
      alert("Data pendidikan berhasil diperbarui");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit Pendidikan</h2>
      <form onSubmit={handleUpdatePenelitian}>
      <div className="form-group">
          <label>Id Pendidikan</label>
          <input
            type="text"
            className="form-control"
            name="id_pendidikan"
            value={id}
            // onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Jenjang Pendidikan</label>
          <input
            type="text"
            className="form-control"
            name="jenjang_pendidikan"
            value={formData.jenjang_pendidikan}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Nama Institusi</label>
          <input
            type="text"
            className="form-control"
            name="nama_institusi"
            value={formData.nama_institusi}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Tahun Lulus</label>
          <input
            type="text"
            className="form-control"
            name="tahun_lulus"
            value={formData.tahun_lulus}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditRiwayatComponent;
