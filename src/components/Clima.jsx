import React from 'react';
import PropTypes from 'prop-types';
import Icono from './Icono';
const Clima = ({resultado}) => {    
    const {name, main}=resultado;
    if(!name) return null;    
    //grados kelvin
    const kelvin=273.5;
    //de grados kelvin a celcius
    const temp= (main.temp - kelvin).toFixed(2); 
    //icono de clima
    
    
    return ( 
        <div>
            <div className="bg-light mb-3">
                <h2 className="text-center text-white bg-dark text-white p-3 m-0">El clima de {name} :</h2>
                
                <ul className="list-group">
                    <li className="text-center list-group-item fs-2rem">
                        {temp} °C <Icono temp={temp} />
                    </li>
                    <li className="text-center list-group-item fs-1rem">
                        Temperatura máxima:  {(main.temp_max - kelvin).toFixed(2)} °C
                    </li>
                    <li className="text-center list-group-item fs-1rem">
                        Temperatura mínima:  {(main.temp_min - kelvin).toFixed(2)} °C
                    </li>                    
                </ul>
            </div>
        </div>
    );
}
Clima.propTypes={
    resultado: PropTypes.object.isRequired
}
export default Clima;