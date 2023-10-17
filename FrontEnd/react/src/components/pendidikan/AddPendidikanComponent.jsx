import React, { useState } from 'react';
import axios from 'axios';


const AddRiwayatComponent = () => {
  const [formData, setFormData] = useState({
    id_pendidikan: '',
    jenjang_pendidikan: '',
    nama_institusi: '',
    tahun_lulus: '',
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
    axios.post('http://localhost:3100/riwayat_pendidikan', formData)
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
      <h2 className="mt-4">Add riwayat</h2>
      <form onSubmit={handleSubmit}>
        {<div className="mb-3">
          <label className="form-label">id</label>
          <input
            type="text"
            name="id_pendidikan"
            value={formData.id_pendidikan}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>}
        <div className="mb-3">
          <label className="form-label">jenjang pendidikan</label>
          <input
            type="text"
            name="jenjang_pendidikan"
            value={formData.jenjang_pendidikan}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">tahun lulus</label>
          <input
            type="text"
            name="tahun_lulus"
            value={formData.tahun_lulus}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">nama institusi</label>
          <input
            type="text"
            name="nama_institusi"
            value={formData.nama_institusi}
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

export default AddRiwayatComponent;