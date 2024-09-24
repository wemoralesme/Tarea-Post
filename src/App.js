import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CursoForm from './components/CursoForm';
import CursoList from './components/CursoList';
import AlumnoList from './components/AlumnoList';
import Navbar from './components/Navbar.js';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CursoForm />} />
          <Route path="/cursos" element={<CursoList />} />
          <Route path="/alumnos" element={<AlumnoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

