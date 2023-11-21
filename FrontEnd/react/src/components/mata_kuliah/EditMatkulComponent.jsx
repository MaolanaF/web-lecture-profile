import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

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
      Swal.fire({
        title: 'Berhasil mengedit data mata kuliah',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000, // 2000 milidetik (2 detik),
        didClose: () => {
          // Logika untuk pindah ke halaman tertentu setelah SweetAlert ditutup
          window.location.reload();
        }
      });
    } catch (error) {
      console.error("Gagal mengedit data mata kuliah", error);
    }

    window.location = "http://localhost:5173/mata_kuliah"
  };

  return (
    <div className="container">
      {/* <h2>Edit Dosen</h2> */}
      <form onSubmit={handleUpdateMatkul}>
      {/* <div className="form-group">
          <label>ID Mata Kuliah</label>
          <input
            type="text"
            className="form-control"
            name="id_maktul"
            value={id}
            // onChange={handleInputChange}
            disabled
          />
        </div> */}
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
