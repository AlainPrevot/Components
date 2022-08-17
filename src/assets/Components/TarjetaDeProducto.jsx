import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import '../../style/TarjetaDeProducto.css'


const TarjetaDeProducto = ({category, title, description, price, discount, ImagenDesktop, ImagenMobile}) =>{
    
    const producto = screen.width > 460 ? ImagenDesktop : ImagenMobile;

    return(
        <div className='card'>
            <img src={producto} alt="" />
            <div className='card--content'>
                <h3>{category}</h3>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className='card--content__price'>
                    <h2 className='discount'>{discount}</h2>
                    <h2 className='price'>{price}</h2>
                </div>
                <button>Añadir al Carrito</button>
            </div>
        </div>
    );
};

export default TarjetaDeProducto;

TarjetaDeProducto.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    ImagenDesktop: PropTypes.string.isRequired,
    ImagenMobile: PropTypes. string.isRequired
}