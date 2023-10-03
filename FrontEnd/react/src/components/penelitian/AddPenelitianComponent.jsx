import React, { useState } from 'react';
import axios from 'axios';

const AddPenelitianComponent = () => {
  const [formData, setFormData] = useState({
    id_penelitian: '',
    judul: '',
    tanggal_publikasi: '',
    bidang: '',
    author: '',
    link_penelitian: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Make a POST request to your backend endpoint
    axios.post('http://localhost:3100/penelitian', formData)
      .then((response) => {
        console.log(response.data);
        // Handle success or redirection here
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="container">
      <h2 className="mt-4">Add Riwayat Penelitian</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Id Penelitian</label>
          <input
            type="text"
            name="id_penelitian"
            value={formData.id_penelitian}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Judul</label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tanggal Publikasi</label>
          <input
            type="date"
            name="tanggal_publikasi"
            value={formData.tanggal_publikasi}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bidang</label>
          <input
            type="text"
            name="bidang"
            value={formData.bidang}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Link Penelitian</label>
          <input
            type="text"
            name="link_penelitian"
            value={formData.link_penelitian}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddPenelitianComponent;