import React from 'react'
import ReactDOM from 'react-dom/client'

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
                <input accept='image/*' id='inputImagen' type="file" onChange={ImageNew}/>


                <label htmlFor="title" className='label-title'>Titulo</label>
                <textarea onChange={() => TextNew(setTitleNew, 'title')} id='title'  className='title'  />

                <label htmlFor="description">Descripción</label>
                <textarea onChange={() => TextNew(setDescriptionNew, 'description')} id='description' className='description'  />

            </div>
        </div>
    )
}
export default Menu__CodigoQR;