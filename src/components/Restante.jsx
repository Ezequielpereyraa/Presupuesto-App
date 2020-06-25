import React from 'react';
import { asignarClase } from '../Helpers';
import PropTypes from 'prop-types';
const Restante = ({ presupuesto, restante }) => {
  return (
    <>
      <div className='alert alert-primary'>Presupuesto: ${presupuesto}</div>
      <div className={asignarClase(presupuesto, restante)}>
        Restante: ${restante}
      </div>
    </>
  );
};
Restante.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
export default Restante;
