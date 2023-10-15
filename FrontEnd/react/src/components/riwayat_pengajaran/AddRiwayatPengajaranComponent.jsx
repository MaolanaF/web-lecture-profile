import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddRiwayatPengajaranComponent = () => {

  const [dosenList, setDosenList] = useState([]);

  useEffect(() => {
    // Lakukan permintaan GET ke backend endpoint untuk mendapatkan daftar dosen
    axios.get('http://localhost:3100/dosen')
      .then((response) => {
        setDosenList(response.data); // Mengatur data dosen ke dalam state
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []);

  const [matkulList, setMatkulList] = useState([]);

  useEffect(() => {
    // Lakukan permintaan GET ke backend endpoint untuk mendapatkan daftar mata_kuliah
    axios.get('http://localhost:3100/mata_kuliah')
      .then((response) => {
        setMatkulList(response.data); // Mengatur data dosen ke dalam state
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []);

  const [formData, setFormData] = useState({
    id_dosen: '',
    id_matkul: ''
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
    axios.post('http://localhost:3100/riwayat_pengajaran', formData)
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
      <h2 className="mt-4">Add Mata Kuliah</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nama Mata Kuliah</label>
          <select
            name="id_matkul"
            value={formData.id_matkul}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Pilih Mata Kuliah</option>
            {
              matkulList.map((element) => (
                <option key={element.id_matkul} value={element.nama_matkul}>{element.nama_matkul}</option>
              ))
            }
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Nama Dosen</label>
          <select
            name="id_dosen"
            value={formData.id_dosen}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Pilih Dosen</option>
            {
              dosenList.map((element) => (
                <option key={element.id_dosen} value={element.nama}>{element.nama}</option>
              ))
            }
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddRiwayatPengajaranComponent;