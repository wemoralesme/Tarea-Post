import React, { useState } from 'react';
import axios from 'axios';

const CursoForm = () => {
  const [nombre, setNombre] = useState('');
  const [creditos, setCreditos] = useState(0);
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://test-deploy-12.onrender.com/cursos', {
        nombre,
        creditos,
        descripcion
      });
      alert('Curso registrado exitosamente');
    } catch (error) {
      alert('Error al registrar el curso');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Curso:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div>
        <label>Créditos:</label>
        <input type="number" value={creditos} onChange={(e) => setCreditos(e.target.value)} required />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
      </div>
      <button type="submit">Registrar Curso</button>
    </form>
  );
};

export default CursoForm;
