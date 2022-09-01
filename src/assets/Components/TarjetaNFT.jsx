import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleTarjetaNFT from './style/TarjetaNFT.module.sass'




const TarjetaNFT = ({title, item, description, price, money, time, author}) => {
    return(
        <div className={StyleTarjetaNFT.card}>
            <img className={StyleTarjetaNFT.card__image} src="../../image/TarjetaNFT/ImageEquilibrium.jpg" alt="imageEquilibrium" />
            <div className={StyleTarjetaNFT.card__content}>
                <a>{title} #{item}</a>
                <p>{description}</p>
                <div>
                    <h3>{price} {money}</h3>
                    <h3>{time}</h3>
                </div>
            </div>
            <div className={StyleTarjetaNFT.card__content__user}>
                <img className={StyleTarjetaNFT.avatar} src="../../../src/image/TarjetaNFT/ImageAvatar.png" alt="imageAvatar" />
                <h2>Creado por <a href="">{author}</a></h2>
            </div>
        </div>
    );
};

export default TarjetaNFT;