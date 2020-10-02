import React from 'react';
const Icono = ({temp}) => {
    let clase;
    if(temp>=22){
        clase="fas fa-sun text-warning"
    }else if(temp>=15 && temp<22){
        clase="fas fa-cloud-sun text-info";
    }else{
        clase="fas fa-temperature-low text-primary";
    }
    return ( <i className={clase}></i> );
}
 
export default Icono;