import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';
import '../../style/Menu__TarjetaDeProducto.css'

const Menu__TarjetaDeProducto = ({PropNew, ImageNew}) => {
    return(
        <div className='hamburger-menu'>
            <input type="checkbox" id="menu__toggle" />
            <label htmlFor="menu__toggle" className='menu__btn'>
                <span></span>
            </label>
            <div className='menu__box'>

                <h1>Modo Edición</h1>

                <label htmlFor="inputImagen" className='label-category'>Producto</label>
                <label htmlFor="inputImagen" className='label-inputImagen' id='label-inputImagen'>Seleccionar Archivo</label>
                <input accept='image/*' id='inputImagen' name='image' type="file" onChange={ImageNew}/>

                <label htmlFor="category" className='label-category'>Categoría</label>
                <select onChange={PropNew} name="category" id="category">
                    <option value="PERFUME">PERFUME</option>
                    <option value="CALZADO">CALZADO</option>
                    <option value="MAQUILLAJE">MAQUILLAJE</option>
                    <option value="LABIAL">LABIAL</option>
                </select>

                <label htmlFor="title" className='label-title'>Titulo</label>
                <textarea onChange={PropNew} id='title' name='title'  className='title' placeholder='Agregue un Titulo' />

                <label htmlFor="description">Descripción</label>
                <textarea onChange={PropNew} id='description' name='description' className='description' placeholder='Agregue una Descripción'/>

                <div className='menu__box--content'>

                    <label htmlFor="discount" className='label-discount'>Descuento</label>
                    <input onChange={PropNew} id='discount' name='discount' className='discount' type="number" /> 

                    <label htmlFor="price" className='label-price'>Precio</label>
                    <input onChange={PropNew} id='price' name='price' className='price' type="number" />

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