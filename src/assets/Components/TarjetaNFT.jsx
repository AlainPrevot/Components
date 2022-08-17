import React from 'react';
import ReactDOM from 'react-dom/client';

import '../../style/TarjetaNFT.css'


const TarjetaNFT = ({title, item, description, price, money, time, author}) => {
    return(
        <div className='card'>
            <img className='card--image' src="../src/assets/TarjetaNFT/image-equilibrium.jpg" alt="imageEquilibrium" />
            <div className='card--content'>
                <a>{title} #{item}</a>
                <p>{description}</p>
                <div>
                    <h3>{price} {money}</h3>
                    <h3>{time}</h3>
                </div>
            </div>
            <div className='card--content__user'>
                <img className='avatar' src="../src/assets/TarjetaNFT/image-avatar.png" alt="imageAvatar" />
                <h2>Creado por <a href="">{author}</a></h2>
            </div>
        </div>
    );
};

export default TarjetaNFT;