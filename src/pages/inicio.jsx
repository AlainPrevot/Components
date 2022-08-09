import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/inicio.css'

const PaginaInicio = () => {
    return(
        <>
            <h1>Desarrollo de Componentes con React</h1>
            <p>Estos son algunos de los componentes que desarrolle</p>
            <div className='content--components'>
                <div className='prueba'> </div>
                <div className='prueba'> </div>
                <div className='prueba'> </div>
                <div className='prueba'> </div>
                <div className='prueba'> </div>
            </div>
        </>
    )
}

export default PaginaInicio