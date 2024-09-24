import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Registrar Curso</Link></li>
        <li><Link to="/cursos">Consultar Cursos</Link></li>
        <li><Link to="/alumnos">Consultar Alumnos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
