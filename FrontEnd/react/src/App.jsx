import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import AddDosen from './pages/dosen/AddDosen';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/dosen/insert" element = {<AddDosen/>} />
          </Routes>
      </Router>
  )
}

export default App