import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/TarjetaNFT.css'


const TarjetaNFT = ({titulo, parrafo, precio, tiempo, autor}) => {
    return(
        <div className='tarjeta'>
            <img className='imagen' src="./assets/TarjetaNFT/image-equilibrium.jpg" alt="imageEquilibrium" />
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
            <div>
                <h3>{precio}</h3>
                <h3>{tiempo}</h3>
            </div>
            <h2>{autor}</h2>
        </div>
    );
};

export default TarjetaNFT;