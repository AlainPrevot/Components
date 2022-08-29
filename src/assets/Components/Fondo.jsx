import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleFondo from './style/Fondo.module.sass'


const Fondo = () => {
    return(
        <div className={StyleFondo.bubbles}>
            <div className={StyleFondo.bubble}></div>
            <div className={StyleFondo.bubble}></div>
            <div className={StyleFondo.bubble}></div>
            <div className={StyleFondo.bubble}></div>
            <div className={StyleFondo.bubble}></div>
        </div>
    )
}
export default Fondo;
