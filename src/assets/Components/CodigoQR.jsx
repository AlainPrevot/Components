import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleCodigoQR from './style/CodigoQR.module.sass'
import PropTypes from 'prop-types';


const CodigoQR = ({title, description, image}) => {
    return(
        <div className={StyleCodigoQR.content}>
            <img src={image} alt="CodeQR" className={StyleCodigoQR.content__codeQR}/>
            <h1 className={StyleCodigoQR.content__title}>{title}</h1>
            <p className={StyleCodigoQR.content__description}>{description}</p>
        </div>
    )
}
export default CodigoQR;


CodigoQR.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}