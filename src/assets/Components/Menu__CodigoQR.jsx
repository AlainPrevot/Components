import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';
import StyleMenu__CodigoQR from './style/Menu__CodigoQR.module.sass'

const Menu__CodigoQR = ({TextNew, ImageNew}) => {
    return(
        <div className={StyleMenu__CodigoQR.hamburger__menu}>
            <input type="checkbox" id='menu__toggle' className={`${StyleMenu__CodigoQR.menu__toggle} ${StyleMenu__CodigoQR.input}`}/>
            <label htmlFor="menu__toggle" className={StyleMenu__CodigoQR.menu__btn}>
                <span></span>
            </label>
            <div className={StyleMenu__CodigoQR.menu__box}>

                <h1 className={StyleMenu__CodigoQR.menu_box__title}>Modo Edición</h1>

                <label htmlFor="inputImagen" className={`${StyleMenu__CodigoQR.label_category} ${StyleMenu__CodigoQR.label}`}>QR</label>
                <label htmlFor="inputImagen" className={`${StyleMenu__CodigoQR.label_inputImagen} ${StyleMenu__CodigoQR.label}`} id='label-inputImagen'>Seleccionar Archivo</label>
                <input accept='image/*' className={`${StyleMenu__CodigoQR.inputImagen} ${StyleMenu__CodigoQR.input}`} id='inputImagen' name='image' type="file" onChange={ImageNew}/>


                <label htmlFor="title" className={`${StyleMenu__CodigoQR.label_title} ${StyleMenu__CodigoQR.label}`}>Titulo</label>
                <textarea onChange={TextNew} id='title' name='title' className={`${StyleMenu__CodigoQR.title} ${StyleMenu__CodigoQR.textarea}`} placeholder='Ingrese un Titulo' />

                <label htmlFor="description" className= {StyleMenu__CodigoQR.label}>Descripción</label>
                <textarea onChange={TextNew} id='description' name='description' className={`${StyleMenu__CodigoQR.description} ${StyleMenu__CodigoQR.textarea}`} placeholder='Ingrese una Descripción' />

            </div>
        </div>
    )
}
export default Menu__CodigoQR;

Menu__CodigoQR.propTypes = {
    TextNew: PropTypes.func.isRequired,
    ImageNew: PropTypes.func.isRequired
}