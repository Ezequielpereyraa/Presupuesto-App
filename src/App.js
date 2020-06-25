import React, { useState, useEffect } from 'react';
import './App.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Restante from './components/Restante';

function App() {
  // Definir Presupuesto
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [show, setShow] = useState(true);
  const [gastos, setNewGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, setCrearGasto] = useState(false);
  // UseEfect Que actualiza el Restante
  useEffect(() => {
    if (creargasto) {
      setNewGastos((aux) => [...aux, gasto]);
      // Resetear a False
      setCrearGasto(false);
      const presupuestoRestante = restante - gasto.cantidadg;
      setRestante(presupuestoRestante);
    }
  }, [gasto, creargasto, restante]);

  return (
    <div className='container'>
      <h1>Gasto Semanal</h1>
      <div className='contenido-principal contenido'>
        {show ? (
          <Pregunta
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setShow={setShow}
          />
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Formulario
                guardarGasto={guardarGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className='one-half column'>
              <Resultado gastos={gastos} />
              <Restante presupuesto={presupuesto} restante={restante} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
