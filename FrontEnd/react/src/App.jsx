import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import { Link } from "react-router-dom";

import Dosen from './pages/dosen/Dosen';
import AddDosen from './pages/dosen/AddDosen';
import EditDosen from './pages/dosen/EditDosen';
import Penelitian from './pages/penelitian/Penelitian';
import AddPenelitian from './pages/penelitian/AddPenelitian';
import EditPenelitian from './pages/penelitian/EditPenelitian';
import AddMatkul from './pages/mata_kuliah/AddMatkul';
import Mata_Kuliah from './pages/mata_kuliah/Matkul';
import EditMatkul from './pages/mata_kuliah/EditMatkul';
import Pendidikan from './pages/pendidikan/Pendidikan';
import AddPendidikan from './pages/pendidikan/AddPendidikan';
import EditPendidikan from './pages/pendidikan/EditPendidikan';
import AddPengajaran from './pages/riwayat_pengajaran/AddRiwayatPengajaran';
import AddRiwayatPenelitian from './pages/riwayat_penelitian/AddRiwayatPenelitian';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/DosenProfile';
import DashboardAdmin_Dosen from './pages/DashboardAdmin_Dosen';
import DashboardAdmin_Matkul from './pages/DashboardAdmin_Matkul';
import DashboardDosen_Dosen from './pages/DashboardDosen_Dosen';
import DashboardDosen_Penelitian from './pages/DashboardDosen_Penelitian';
import EditRiwayatPengajaran from './pages/riwayat_pengajaran/EditRiwayatPengajaran'
// // import DashboardDosen_Dosen from './pages/DashboardDosen_Dosen';
// import EditPkm from './pages/pkm/EditPkm'
// // import AddPkm from './pages/pkm/InputPkm'
// // import ListPkm from './pages/pkm/ListPkms'
// // import EditRiwayatPkm from './pages/riwayatPkm/EditRiwayatPkm'
// // import AddRiwayatPkm from './pages/riwayatPkm/InputRiwayatPkm'
// // import ListRiwayatPkm from './pages/riwayatPkm/ListRiwayatPkms'

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/dosen" element = {<Dosen />} />
            <Route path="/dosen/insert" element = {<AddDosen/>} />
            <Route path="/dosen/edit/:id_dosen" element = {<EditDosen/>} />
            <Route path="/penelitian" element = {<Penelitian />} />
            <Route path="/penelitian/insert" element = {<AddPenelitian/>} />
            <Route path="/penelitian/edit/:id_penelitian" element = {<EditPenelitian/>} />
            <Route path="/mata_kuliah/insert" element = {<AddMatkul/>} />
            <Route path="/mata_kuliah" element = {<Mata_Kuliah/>} />
            <Route path="/pendidikan" element = {<Pendidikan />} />
            <Route path="/pendidikan/insert" element = {<AddPendidikan/>} />
            <Route path="/riwayat_pendidikan/edit/:id_pendidikan" element = {<EditPendidikan/>} />
            <Route path="/mata_kuliah/edit/:id_matkul" element = {<EditMatkul/>} />
            <Route path="/riwayat_pengajaran/insert" element = {<AddPengajaran/>} />
            <Route path="/riwayat_penelitian/insert" element = {<AddRiwayatPenelitian/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/login" element = {<Login/>} />
            <Route path="/dosenProfile/:id_dosen" element = {<Profile/>} />
            <Route path="/dashboard_admin/dosen" element = {<DashboardAdmin_Dosen/>} />
            <Route path="/dashboard_admin/mata_kuliah" element = {<DashboardAdmin_Matkul/>} />
            <Route path="/dashboard_dosen/dosen/:id_dosen" element = {<DashboardDosen_Dosen/>} />
            <Route path="/dashboard_dosen/penelitian/:id_dosen" element={<DashboardDosen_Penelitian />} />
            <Route path="/riwayat_pengajaran/edit/:id_pengajaran" element={<EditRiwayatPengajaran/>} />

            {/* {/* <Route path="/dashboard_dosen/:id_dosen" element = {<DashboardDosen_Dosen/>} /> */}
            {/* <Route path="/pkm/list" element={<ListPkm />} />
            <Route path="/pkm/insert" element={<AddPkm />} />
            <Route path="/pkm/edit/:id_pkm" element={<EditPkm />} />
            <Route path="/riwayatpkm/list" element={<ListRiwayatPkm />} />
            <Route path="/riwayatpkm/insert" element={<AddRiwayatPkm />} />
            <Route path="/riwayatpkm/edit/:id_riwayatpkm" element={<EditRiwayatPkm />} /> */}
          </Routes>
      </Router>
      
  )
}


export default App;