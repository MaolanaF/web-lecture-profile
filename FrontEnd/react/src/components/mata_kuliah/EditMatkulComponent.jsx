import React, { useEffect, useState } from "react";
import axios from "axios";

function EditMatkulComponent({ id }) {
    const [formData, setFormData] = useState({
    id_matkul: "",
    kode_matkul: "",
    nama_matkul: "",
    kode_kelas: "",
    perguruan_tinggi: "",
  });

  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3100/mata_kuliah/${id}`);
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

  // Function to handle the form submission for updating dosen
  const handleUpdateMatkul = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3100/mata_kuliah/${id}`, formData);
      console.log(response.data);
      alert("Data mata kuliah berhasil diperbarui");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4">
      {/* <h2>Edit Dosen</h2> */}
      <form onSubmit={handleUpdateMatkul}>
      <div className="form-group">
          <label>id_matkul</label>
          <input
            type="text"
            className="form-control"
            name="id_maktul"
            value={id}
            // onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Kode Mata Kuliah</label>
          <input
            type="text"
            className="form-control"
            name="kode_matkul"
            value={formData.kode_matkul}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Nama Mata Kuliah</label>
          <input
            type="text"
            className="form-control"
            name="nama_matkul"
            value={formData.nama_matkul}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Kode Kelas</label>
          <input
            type="text"
            className="form-control"
            name="kode_kelas"
            value={formData.kode_kelas}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Perguruan Tinggi</label>
          <input
            type="text"
            className="form-control"
            name="perguruan_tinggi"
            value={formData.perguruan_tinggi}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditMatkulComponent;
