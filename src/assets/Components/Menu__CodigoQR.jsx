import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';
import '../../style/Menu__CodigoQR.css'

const Menu__CodigoQR = ({TextNew, ImageNew}) => {
    return(
        <div className='hamburger-menu'>
            <input type="checkbox" id="menu__toggle" />
            <label htmlFor="menu__toggle" className='menu__btn'>
                <span></span>
            </label>
            <div className='menu__box'>

                <h1>Modo Edición</h1>

                <label htmlFor="inputImagen" className='label-category'>QR</label>
                <label htmlFor="inputImagen" className='label-inputImagen' id='label-inputImagen'>Seleccionar Archivo</label>
                <input accept='image/*' id='inputImagen' name='image' type="file" onChange={ImageNew}/>


                <label htmlFor="title" className='label-title'>Titulo</label>
                <textarea onChange={TextNew} id='title' name='title' className='title' placeholder='Ingrese un Titulo' />

                <label htmlFor="description">Descripción</label>
                <textarea onChange={TextNew} id='description' name='description' className='description' placeholder='Ingrese una Descripción' />

            </div>
        </div>
    )
}
export default Menu__CodigoQR;

Menu__CodigoQR.propTypes = {
    TextNew: PropTypes.func.isRequired,
    ImageNew: PropTypes.func.isRequired
}