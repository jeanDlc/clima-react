import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const Formulario = ({guardarConsulta, mostrarSpinner, mostrarError}) => {
    //state
    const [error, activarError]=useState(false);
    const [busqueda, guardarBusqueda]= useState({
        ciudad:'',
        pais:''
    });    
    const {ciudad, pais}=busqueda;    
    //función que coloca los elementos en el state
    const handleChange=e=>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }
    //función que se llama al dar submit el formulario
    const handleSubmit=e=>{
        e.preventDefault();        
        //validar
        if(ciudad.trim()==='' || pais.trim()===''){
            activarError(true);
            return;
        }
        mostrarError(false);
        mostrarSpinner(true);
        activarError(false);
        //pasarlo al componente principal
        guardarConsulta(busqueda);
        
       //limpiar formulario
       guardarBusqueda({
           ciudad:'',
           pais:''
       });
        
    }
    return ( 
        <div className="p-3 bg-light mb-3">
            <h2 className="text-center">Llena todos los campos</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" 
                        className="form-control" 
                        id="ciudad"
                        name="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />                
                </div>
                <div className="form-group">
                    <label htmlFor="pais">Pais</label>
                    <select className="custom-select my-1 mr-sm-2"
                    id="pais"
                    name="pais"
                    value={pais}
                    onChange={handleChange}
                    >
                        <option disabled value=''>Elige...</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>               
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Buscar</button>
                {error? <Error mensaje="Llena todos los Campos!!!"/>: null}
            </form>
        </div>
    );
}
Formulario.propTypes={
    guardarConsulta: PropTypes.func.isRequired,
    mostrarSpinner: PropTypes.func.isRequired,
    mostrarError: PropTypes.func.isRequired
}
export default Formulario;