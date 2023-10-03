import React, { useState } from 'react';
import axios from 'axios';

const AddMatkulComponent = () => {
  const [formData, setFormData] = useState({
    id_matkul: '',
    kode_matkul: '',
    nama_matkul: '',
    semester: '',
    kode_kelas: '',
    perguruan_tinggi: '',
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
    axios.post('http://localhost:3100/mata_kuliah', formData)
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
      <h2 className="mt-4">Add Riwayat Pengajaran</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Id Mata Kuliah</label>
          <input
            type="text"
            name="id_matkul"
            value={formData.id_matkul}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kode Mata Kuliah</label>
          <input
            type="text"
            name="kode_matkul"
            value={formData.kode_matkul}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Mata Kuliah</label>
          <input
            type="text"
            name="nama_matkul"
            value={formData.nama_matkul}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Semester</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Kode Kelas</label>
          <input
            type="text"
            name="kode_kelas"
            value={formData.kode_kelas}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Perguruan Tinggi</label>
          <input
            type="text"
            name="perguruan_tinggi"
            value={formData.perguruan_tinggi}
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

export default AddMatkulComponent;