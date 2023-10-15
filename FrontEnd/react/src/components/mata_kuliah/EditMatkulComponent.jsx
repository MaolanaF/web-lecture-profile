import React, { useEffect, useState } from "react";
import axios from "axios";


function EditMatkulComponent({ id }) {
    const [matkulList, setMatkulList] = useState({});
    const [formData, setFormData] = useState({
    id_matkul: "",
    kode_matkul: "",
    nama_matkul: "",
    semester: "",
    kode_kelas: "",
    perguruan_tinggi: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3100/mata_kuliah/${id}`);
        setMatkulList(response.data);
        setFormData(response.data);
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

  // Function to handle the form submission for updating matkul
  const handleUpdateMatkul = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3100/mata_kuliah/${formData.id_matkul}`, formData);
      console.log(response.data);
      alert("Data mata kuliah berhasil diperbarui");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4 border">
      <h2>Edit Mata Kuliah</h2>
      <form onSubmit={handleUpdateMatkul}>
      <div className="form-group">
          <label>Id Mata Kuliah</label>
          <input
            type="text"
            className="form-control"
            name="id_matkul"
            value={formData.id_matkul}
            onChange={handleInputChange}
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
          <label>Semester</label>
          <input
            type="text"
            className="form-control"
            name="semester"
            value={formData.semester}
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
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditMatkulComponent;
