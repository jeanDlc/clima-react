import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Spinner from './components/Spinner';
import Error from './components/Error';
import { useEffect } from 'react';


function App() {
  //state
  const [consulta, guardarConsulta]=useState({});
  const [resultado, guardarResultado]=useState({});
  const [spinner, mostrarSpinner]=useState(false);
  const [error, mostrarError]=useState(false);
  useEffect(()=>{
    if( Object.keys(consulta).length===0){
      //si el objeto está vacío, no buscar nada
      return;
    }
    //consulta api
    const consultarAPi = async (miConsulta) => {
      const {ciudad, pais}=miConsulta;
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=07a587242456c7d5e9efbb99eaeba742`;      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      mostrarSpinner(false);
      if(resultado.cod==404){
        mostrarError(true);
      }
      guardarResultado(resultado);
      
    }
    consultarAPi(consulta);
  }, [consulta]);
  return (
    <Fragment>
      <Header titulo="Clima App"/>      
      <div className="mt-3">        
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <Formulario
                 guardarConsulta={guardarConsulta}
                 mostrarSpinner={mostrarSpinner}
                 mostrarError={mostrarError}
                 />
            </div>
            <div className="col-md-6">
                {spinner? <Spinner/> : <Clima resultado={resultado} />}
                {error? <Error mensaje="No se encontraron resultados" /> : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
