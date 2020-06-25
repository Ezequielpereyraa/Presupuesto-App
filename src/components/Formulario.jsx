import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({ guardarGasto, setCrearGasto }) => {
  const [nombreg, setNombreg] = useState('');
  const [cantidadg, setCantidadg] = useState(0);
  const [error, setError] = useState(false);
  // Agregar los gastos y Error
  const enviarGastos = (e) => {
    e.preventDefault();
    if (nombreg.trim() === '' || cantidadg < 1) {
      setError(true);
      return;
    }
    //pasamos la validacion
    setError(false);
    // Construir los gastos
    const gasto = {
      nombreg,
      cantidadg,
      id: shortid.generate(),
    };
    guardarGasto(gasto);
    setCrearGasto(true);
    setNombreg('');
    setCantidadg(0);
  };

  return (
    <>
      <h2>Agrega tu gasto aqui</h2>
      <form onSubmit={enviarGastos}>
        <div className='campo'>
          <label> Nombre Gasto</label>
          {error ? <Error mensaje='Campos Obligarios' /> : null}
          <input
            type='text'
            placeholder='Ej. transporte'
            className='u-full-width'
            value={nombreg}
            onChange={(e) => setNombreg(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label> Cantidad</label>
          <input
            type='number'
            placeholder='Ej. $5000'
            className='u-full-width'
            value={cantidadg}
            onChange={(e) => setCantidadg(parseInt(e.target.value))}
          />
        </div>
        <input
          type='submit'
          value='Agregar'
          className='u-full-width button-primary'
        />
      </form>
    </>
  );
};
Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};
export default Formulario;
