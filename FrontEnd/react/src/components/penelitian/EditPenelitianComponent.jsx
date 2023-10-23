import React, { useEffect, useState } from "react";
import axios from "axios";


function EditPenelitianComponent({ id }) {
    const [formData, setFormData] = useState({
    id_penelitian: "",
    judul: "",
    tanggal_publikasi: "",
    bidang: "",
    author: "",
    link_penelitian: "",
    file: null
  });

  const hancleFileChange = (e) => {

    setFormData({
      ...formData,
      ['file']: e.target.files[0],
    });

  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3100/penelitian/${id}`);
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
      const response = await axios.put(`http://localhost:3100/penelitian/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("Data penelitian berhasil diperbarui");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4">
      {/* <h2>Edit Penelitian</h2> */}
      <form onSubmit={handleUpdatePenelitian}>
      <div className="form-group">
          <label>Id Penelitian</label>
          <input
            type="text"
            className="form-control"
            name="id_penelitian"
            value={id}
            // onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Judul</label>
          <input
            type="text"
            className="form-control"
            name="judul"
            value={formData.judul}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Tanggal Publikasi</label>
          <input
            type="date"
            className="form-control"
            name="tanggal_publikasi"
            value={formData.tanggal_publikasi}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Bidang</label>
          <input
            type="text"
            className="form-control"
            name="bidang"
            value={formData.bidang}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">File</label>
          <input
            type="file"
            name="file"
            onChange={hancleFileChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditPenelitianComponent;
