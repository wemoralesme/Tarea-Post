import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CursoList = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get('https://test-deploy-12.onrender.com/cursos');
        setCursos(response.data);
      } catch (error) {
        console.error('Error al obtener los cursos', error);
      }
    };

    fetchCursos();
  }, []);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id}>
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>
            <p>Créditos: {curso.creditos}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoList;
