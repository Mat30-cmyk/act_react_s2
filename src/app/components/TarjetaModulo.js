// app/components/TarjetaModulo.js
import React from 'react';
import styles from './TarjetaModulo.module.css';

const TarjetaModulo = ({ nombre, descripcion, categoria, variante }) => {
  let claseVariante;
  switch (variante) {
    case 'primaria':
      claseVariante = styles.tarjetaPrimaria;
      break;
    case 'secundaria':
      claseVariante = styles.tarjetaSecundaria;
      break;
    case 'exito':
      claseVariante = styles.tarjetaExito;
      break;
    default:
      claseVariante = styles.tarjeta;
  }

  return (
    <div className={`${styles.tarjeta} ${claseVariante}`}>
      <div className={styles.encabezado}>
        <h3 className={styles.titulo}>{nombre}</h3>
        <span className={styles.categoria}>{categoria}</span>
      </div>
      <p className={styles.descripcion}>{descripcion}</p>
    </div>
  );
};

export default TarjetaModulo;