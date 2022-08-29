import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';
// import '../../style/Menu__TarjetaDeProducto.css'

import StyleMenu__TarjetaDeProducto from './style/Menu__TarjetaDeProducto.module.sass'

const Menu__TarjetaDeProducto = ({PropNew, ImageNew}) => {
    return(
        <div className={StyleMenu__TarjetaDeProducto.hamburger__menu}>
            <input type="checkbox" id="menu__toggle" className={`${StyleMenu__TarjetaDeProducto.menu__toggle} ${StyleMenu__TarjetaDeProducto.input}`}/>
            <label htmlFor="menu__toggle" className={StyleMenu__TarjetaDeProducto.menu__btn}>
                <span></span>
            </label>
            <div className={StyleMenu__TarjetaDeProducto.menu__box}>

                <h1>Modo Edición</h1>

                <label htmlFor="inputImagen" className={`${StyleMenu__TarjetaDeProducto.label_category} ${StyleMenu__TarjetaDeProducto.label}`}>Producto</label>
                <label htmlFor="inputImagen" className={StyleMenu__TarjetaDeProducto.label_inputImagen} id='label-inputImagen'>Seleccionar Archivo</label>
                <input accept='image/*' id='inputImagen' className={StyleMenu__TarjetaDeProducto.inputImagen} name='image' type="file" onChange={ImageNew}/>

                <label htmlFor="category" className={`${StyleMenu__TarjetaDeProducto.label_category} ${StyleMenu__TarjetaDeProducto.label}`}>Categoría</label>
                <select onChange={PropNew} name="category" id="category">
                    <option value="PERFUME">PERFUME</option>
                    <option value="CALZADO">CALZADO</option>
                    <option value="MAQUILLAJE">MAQUILLAJE</option>
                    <option value="LABIAL">LABIAL</option>
                </select>

                <label htmlFor="title" className={`${StyleMenu__TarjetaDeProducto.label_title} ${StyleMenu__TarjetaDeProducto.label}`}>Titulo</label>
                <textarea onChange={PropNew} id='title' name='title'  className={StyleMenu__TarjetaDeProducto.title} placeholder='Agregue un Titulo' />

                <label htmlFor="description" className={StyleMenu__TarjetaDeProducto.label}>Descripción</label>
                <textarea onChange={PropNew} id='description' name='description' className={StyleMenu__TarjetaDeProducto.description} placeholder='Agregue una Descripción'/>

                <div className={StyleMenu__TarjetaDeProducto.menu__box__content}>

                    <label htmlFor="discount" className={`${StyleMenu__TarjetaDeProducto.label_discount} ${StyleMenu__TarjetaDeProducto.label}`}>Descuento</label>
                    <input onChange={PropNew} id='discount' name='discount' className={StyleMenu__TarjetaDeProducto.discount} type="number" /> 

                    <label htmlFor="price" className={`${StyleMenu__TarjetaDeProducto.label_price} ${StyleMenu__TarjetaDeProducto.label}`}>Precio</label>
                    <input onChange={PropNew} id='price' name='price' className={StyleMenu__TarjetaDeProducto.price} type="number" />

                </div>

            </div>
        </div>
    )
}
export default Menu__TarjetaDeProducto;

Menu__TarjetaDeProducto.propTypes = {
    PropNew: PropTypes.func.isRequired,
    ImageNew: PropTypes.func.isRequired
}