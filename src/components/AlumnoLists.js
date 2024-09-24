import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlumnoList = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    const fetchAlumnos = async () => {
      try {
        const response = await axios.get('https://test-deploy-12.onrender.com/alumnos');
        setAlumnos(response.data);
      } catch (error) {
        console.error('Error al obtener los alumnos', error);
      }
    };

    fetchAlumnos();
  }, []);

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>
            <h3>{alumno.nombre}</h3>
            <p>{alumno.matricula}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumnoList;
