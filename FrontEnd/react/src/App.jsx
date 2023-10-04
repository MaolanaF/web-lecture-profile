import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Dosen from './pages/dosen/Dosen';
import AddDosen from './pages/dosen/AddDosen';
import AddPenelitian from './pages/penelitian/AddPenelitian';
import AddMatkul from './pages/mata_kuliah/AddMatkul';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/dosen" element = {<Dosen />} />
            <Route path="/dosen/insert" element = {<AddDosen/>} />
            <Route path="/penelitian/insert" element = {<AddPenelitian/>} />
            <Route path="/mata_kuliah/insert" element = {<AddMatkul/>} />
          </Routes>
      </Router>
  )
}

export default App;