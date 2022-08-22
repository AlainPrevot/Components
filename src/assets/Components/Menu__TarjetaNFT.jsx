import React from 'react'
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import '../../style/Menu__TarjetaNFT.css'

const Menu__TarjetaNFT = ({TextNew}) => {
    return(
            <div className='hamburger-menu'>
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className='menu__btn'>
                    <span></span>
                </label>
                <div className='menu__box'>

                    <h1>Modo Edición</h1>

                    <div className='menu__box--content'>

                        <label htmlFor="title" className='label-title'>Titulo</label>
                        <textarea onChange={TextNew} id='title' name='title' className='title' placeholder='Ingresa un Titulo' />
                        
                        <label htmlFor="item" className='label-item'>Item</label>
                        <input onChange={TextNew} id='item' className='item' name='item' type="number" placeholder='Item' />

                    </div>

                    <label htmlFor="description">Descripción</label>
                    <textarea onChange={TextNew} id='description' className='description' name='description' placeholder='Ingresa una Descripción' />

                    <div className='menu__box--content'>

                        <label htmlFor="price" className='label-price'>Precio</label>
                        <input onChange={TextNew} id='price' className='price' type="number" name='price' placeholder='Ingresa un Precio' />


                        <label htmlFor="money" className='label-money'>Moneda</label>
                        <select onChange={TextNew} name="money" id="money">
                            <option value="ETH">ETH</option>
                            <option value="BTC">BTC</option>
                            <option value="BNB">BNB</option>
                            <option value="DASH">DASH</option>
                        </select>
                    </div>

                    <label htmlFor="time">Tiempo</label>
                    <textarea onChange={TextNew} id='time' className='time' name='time' placeholder='Quedan 3 días'/>

                    <label htmlFor="user">Usuario</label>
                    <textarea onChange={TextNew} id='user' className='user' name='user' placeholder='Ingresa un Usuario'/>
                </div>
            </div>
    )
}
export default Menu__TarjetaNFT;

Menu__TarjetaNFT.propTypes = {
    TextNew: PropTypes.func.isRequired
}