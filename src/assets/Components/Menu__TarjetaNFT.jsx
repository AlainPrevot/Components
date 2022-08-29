import React from 'react'
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import StyleMenu__TarjetaNFT from './style/Menu__TarjetaNFT.module.sass'

const Menu__TarjetaNFT = ({TextNew}) => {
    return(
            <div className={StyleMenu__TarjetaNFT.hamburger__menu}>
                <input type="checkbox" id="menu__toggle" className={StyleMenu__TarjetaNFT.menu__toggle}/>
                <label htmlFor="menu__toggle" className={StyleMenu__TarjetaNFT.menu__btn}>
                    <span></span>
                </label>
                <div className={StyleMenu__TarjetaNFT.menu__box}>

                    <h1>Modo Edición</h1>

                    <div className={StyleMenu__TarjetaNFT.menu__box__content}>

                        <label htmlFor="title" className={StyleMenu__TarjetaNFT.label__title}>Titulo</label>
                        <textarea onChange={TextNew} id='title' name='title' className={StyleMenu__TarjetaNFT.title} placeholder='Ingresa un Titulo' />
                        
                        <label htmlFor="item" className={StyleMenu__TarjetaNFT.label__item}>Item</label>
                        <input onChange={TextNew} id='item' className={StyleMenu__TarjetaNFT.item} name='item' type="number" placeholder='Item' />

                    </div>

                    <label htmlFor="description" className={StyleMenu__TarjetaNFT.label}>Descripción</label>
                    <textarea onChange={TextNew} id='description' className={StyleMenu__TarjetaNFT.description} name='description' placeholder='Ingresa una Descripción' />

                    <div className={StyleMenu__TarjetaNFT.menu__box__content}>

                        <label htmlFor="price" className={StyleMenu__TarjetaNFT.label__price}>Precio</label>
                        <input onChange={TextNew} id='price' className={StyleMenu__TarjetaNFT.price} type="number" name='price' placeholder='Ingresa un Precio' />


                        <label htmlFor="money" className={StyleMenu__TarjetaNFT.label__money}>Moneda</label>
                        <select onChange={TextNew} name="money" id="money" className={StyleMenu__TarjetaNFT.money}>
                            <option value="ETH">ETH</option>
                            <option value="BTC">BTC</option>
                            <option value="BNB">BNB</option>
                            <option value="DASH">DASH</option>
                        </select>
                    </div>

                    <label htmlFor="time" className={StyleMenu__TarjetaNFT.label}>Tiempo</label>
                    <textarea onChange={TextNew} id='time' className={StyleMenu__TarjetaNFT.time} name='time' placeholder='Quedan 3 días'/>

                    <label htmlFor="user" className={StyleMenu__TarjetaNFT.label}>Usuario</label>
                    <textarea onChange={TextNew} id='user' className={StyleMenu__TarjetaNFT.user} name='user' placeholder='Ingresa un Usuario'/>
                </div>
            </div>
    )
}
export default Menu__TarjetaNFT;

Menu__TarjetaNFT.propTypes = {
    TextNew: PropTypes.func.isRequired
}