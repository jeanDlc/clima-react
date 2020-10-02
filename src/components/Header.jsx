import React from 'react';
import PropTypes from 'prop-types';
const Header = ({titulo}) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navHeader">
            <a href="#!" className="p-3 text-white text-center d-block w-100">{titulo} <i className="fas fa-cloud-sun text-info"></i> </a>            
        </nav>
     );
}
Header.propTypes={
    titulo: PropTypes.string.isRequired
}
export default Header;