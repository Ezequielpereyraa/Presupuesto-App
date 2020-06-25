import React from 'react';
import PropTypes from 'prop-types';

const ListaDeGastos = ({ gasto }) => {
  const { nombreg, cantidadg } = gasto;
  return (
    <li className='gastos'>
      <p>
        {nombreg}
        <span className='gasto'>{cantidadg}</span>
      </p>
    </li>
  );
};
ListaDeGastos.propType = {
  gasto: PropTypes.object.isRequired,
};
export default ListaDeGastos;
