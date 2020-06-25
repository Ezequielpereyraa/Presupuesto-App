import React from 'react';
import ListaDeGastos from './ListaDeGastos';
import PropTypes from 'prop-types';
const Resultado = ({ gastos }) => {
  return (
    <div className='gastos-realizados'>
      <h2>Listado de Gastos</h2>
      {gastos.map((gasto) => (
        <ListaDeGastos key={gasto.id} gasto={gasto} />
      ))}
      <p></p>
    </div>
  );
};

Resultado.propTypes = { gastos: PropTypes.array.isRequired };

export default Resultado;
