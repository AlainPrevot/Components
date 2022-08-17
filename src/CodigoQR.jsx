import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/CodigoQR.css'
import PropTypes from 'prop-types';


const CodigoQR = ({title, parrafo, image}) => {
    return(
        <div className='content'>
            <img src={image} alt="CodeQR" className='codeQR'/>
            <h1>{title}</h1>
            <p>{parrafo}</p>
        </div>
    )
}
export default CodigoQR;


// CodigoQR.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     parrafo: PropTypes.string.isRequired
// }