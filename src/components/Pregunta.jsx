import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante, setShow }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);
  // Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };
  // Funcion para agregar los datos
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    // validacion de los datos
    if (cantidad < 1 || isNaN(cantidad)) {
      // Mostramos el error
      setError(true);
      return;
    }
    // Si se pasa la validacion
    setError(false);
    // Le pasamos como parametro el presupuesto
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setShow(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje='Presupuesto invalido' /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={definirPresupuesto}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir presupuesto'
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setShow: PropTypes.func.isRequired,
};
export default Pregunta;
