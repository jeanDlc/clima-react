import React from 'react';
import PropTypes from 'prop-types';
const Error = ({mensaje}) => {
    return ( 
        <div className="mt-3 alert alert-dismissible alert-danger">
            {mensaje}
        </div>
     );
}
Error.propTypes={
    mensaje: PropTypes.string.isRequired
}
export default Error;