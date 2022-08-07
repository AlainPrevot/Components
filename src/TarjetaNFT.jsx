import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/TarjetaNFT.css'


const TarjetaNFT = ({titulo, parrafo, precio, tiempo, autor}) => {
    return(
        <div className='tarjeta'>
            <img className='imagen' src="../src/assets/TarjetaNFT/image-equilibrium.jpg" alt="imageEquilibrium" />
            <div className='tarjeta--content'>
                <a className='titulo'>{titulo}</a>
                <p>{parrafo}</p>
                <div>
                    <h3>{precio}</h3>
                    <h3>{tiempo}</h3>
                </div>
            </div>
            <div className='content--user'>
                <img className='avatar' src="../src/assets/TarjetaNFT/image-avatar.png" alt="" />
                <h2>Creation of <a href="">{autor}</a></h2>
            </div>
        </div>
    );
};

export default TarjetaNFT;