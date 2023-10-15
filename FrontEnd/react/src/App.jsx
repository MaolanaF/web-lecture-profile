import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Dosen from './pages/dosen/Dosen';
import AddDosen from './pages/dosen/AddDosen';
import EditDosen from './pages/dosen/EditDosen';
import Penelitian from './pages/penelitian/Penelitian';
import AddPenelitian from './pages/penelitian/AddPenelitian';
import EditPenelitian from './pages/penelitian/EditPenelitian';
import AddMatkul from './pages/mata_kuliah/AddMatkul';
import Mata_Kuliah from './pages/mata_kuliah/Matkul';
import EditMatkul from './pages/mata_kuliah/EditMatkul';
import Home from './pages/web-pages/index';
import DetailDosen from './pages/web-pages/dosen-details';

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
            <Route path="/dosen/mata_kuliah" element = {<Mata_Kuliah/>} />
            <Route path="/mata_kuliah/edit/:id_matkul" element = {<EditMatkul/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/dosen/:id" element = {<DetailDosen/>} />
          </Routes>
      </Router>
  )
}

export default App;