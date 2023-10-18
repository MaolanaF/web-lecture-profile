import React, { useEffect, useState } from "react";
import axios from "axios";

function EditDosenComponent({ id }) {
    const [formData, setFormData] = useState({
    id_dosen: "",
    nama: "",
    email: "",
    jabatan: "",
    jurusan: "",
    id_user: "",
  });

  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3100/dosen/${id}`);
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
  const handleUpdateDosen = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3100/dosen/${id}`, formData);
      console.log(response.data);
      alert("Data dosen berhasil diperbarui");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4 border">
      {/* <h2>Edit Dosen</h2> */}
      <form onSubmit={handleUpdateDosen}>
      <div className="form-group">
          <label>id_dosen</label>
          <input
            type="text"
            className="form-control"
            name="id_dosen"
            value={id}
            // onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Nama</label>
          <input
            type="text"
            className="form-control"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Jabatan</label>
          <input
            type="text"
            className="form-control"
            name="jabatan"
            value={formData.jabatan}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Jurusan</label>
          <input
            type="text"
            className="form-control"
            name="jurusan"
            value={formData.jurusan}
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

export default EditDosenComponent;
