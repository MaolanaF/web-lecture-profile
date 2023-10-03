import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import AddDosen from './pages/dosen/AddDosen';
import AddPenelitian from './pages/penelitian/AddPenelitian';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/dosen/insert" element = {<AddDosen/>} />
            <Route path="/penelitian/insert" element = {<AddPenelitian/>} />
          </Routes>
      </Router>
  )
}

export default App