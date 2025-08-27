// app/components/TarjetaDinamica.js
import React from 'react';

const TarjetaDinamica = ({ titulo, contenido, colorFondo, colorTexto, ancho, activo }) => {
  const estilos = {
    backgroundColor: activo ? colorFondo : '#f0f0f0',
    color: activo ? colorTexto : '#aaa',
    width: ancho,
    padding: '2rem',
    margin: '1rem',
    borderRadius: '10px',
    boxShadow: activo ? '0 5px 15px rgba(0,0,0,0.2)' : '0 2px 5px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div style={estilos}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{titulo}</h2>
      <p style={{ lineHeight: '1.6' }}>{contenido}</p>
    </div>
  );
};

export default TarjetaDinamica;