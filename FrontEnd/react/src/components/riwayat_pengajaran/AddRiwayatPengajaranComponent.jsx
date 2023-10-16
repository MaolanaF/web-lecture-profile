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
    // Find the corresponding matkul object based on the selected nama_matkul
    const selectedMatkul = matkulList.find((matkul) => matkul.nama_matkul === value);
  
    if (selectedMatkul) {
      // Destructure the matkul object to get the required values
      const { kode_matkul, kode_kelas, semester, perguruan_tinggi } = selectedMatkul;
  
      setFormData({
        ...formData,
        [name]: value,
        kode_matkul: kode_matkul,
        kode_kelas: kode_kelas,
        semester: semester,
        perguruan_tinggi: perguruan_tinggi,
      });
    } else {
      // Clear the values if no matching matkul is found
      setFormData({
        ...formData,
        [name]: value,
        kode_matkul: '',
        kode_kelas: '',
        semester: '',
        perguruan_tinggi: '',
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Extract id_dosen and id_matkul from the formData
    const { id_dosen, id_matkul } = formData;
  
    // Make a POST request to your backend endpoint with id_dosen and id_matkul
    axios.post('http://localhost:3100/riwayat_pengajaran', { id_dosen, id_matkul })
      .then((response) => {
        console.log(response.data);
        console
        // Handle success or redirection here
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div className="container">
      <h2 className="mt-4">Riwayat Pengajaran</h2>
      <form onSubmit={handleSubmit}>
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
                <option key={element.id_dosen} value={element.id_dosen}>{element.nama}</option>
              ))
            }
          </select>
        </div>
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
                <option key={element.id_matkul} value={element.id_matkul}>{element.nama_matkul}</option>
              ))
            }
          </select>
        </div>
        <div className="mb-3">
          <label>Kode Mata Kuliah</label>
          <input
          type="text"
          className="form-control"
          name="kode_matkul"
          value={formData.kode_matkul} // Display kode_matkul from the state
          disabled
          />
        </div>
        <div className="mb-3">
          <label>Semester</label>
          <input
          type="text"
          className="form-control"
          name="semester"
          value={formData.semester}
          disabled
          />
        </div>
        <div className="mb-3">
          <label>Kode Kelas</label>
          <input
          type="text"
          className="form-control"
          name="kode_kelas"
          value={formData.kode_kelas}
          disabled
          />
        </div>
        <div className="mb-3">
          <label>Perguruan Tinggi</label>
          <input
          type="text"
          className="form-control"
          name="perguruan_tinggi"
          value={formData.perguruan_tinggi}
          disabled
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddRiwayatPengajaranComponent;