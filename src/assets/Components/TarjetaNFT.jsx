import React from 'react';
import ReactDOM from 'react-dom/client';
import StyleTarjetaNFT from './style/TarjetaNFT.module.sass'
import PropTypes from 'prop-types';


import ImageEquilibrium from '../../image/TarjetaNFT/ImageEquilibrium.jpg'
import ImageAvatar from '../../image/TarjetaNFT/ImageAvatar.png'


const TarjetaNFT = ({title, item, description, price, money, time, author}) => {
    return(
        <div className={StyleTarjetaNFT.card}>
            <img className={StyleTarjetaNFT.card__image} src={ImageEquilibrium} alt="imageEquilibrium" />
            <div className={StyleTarjetaNFT.card__content}>
                <a>{title} #{item}</a>
                <p>{description}</p>
                <div>
                    <h3>{price} {money}</h3>
                    <h3>{time}</h3>
                </div>
            </div>
            <div className={StyleTarjetaNFT.card__content__user}>
                <img className={StyleTarjetaNFT.avatar} src={ImageAvatar} alt="imageAvatar" />
                <h2>Creado por <a href="">{author}</a></h2>
            </div>
        </div>
    );
};

export default TarjetaNFT;


TarjetaNFT.propTypes = {
    title: PropTypes.string.isRequired,
    item: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    author: PropTypes. string.isRequired
}