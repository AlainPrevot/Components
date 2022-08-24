import React from 'react';
import ReactDOM from 'react-dom/client';

import { Link } from "react-router-dom";

// import './style/inicio.css';
import Page__InicioStyle from './style/Page__Inicio.module.sass';
console.log(Page__InicioStyle)
const PaginaInicio = () => {
    return(
        <>
            <h1 className={Page__InicioStyle.prueba}>Desarrollo de Componentes con React</h1>
            <p>Estos son algunos de los componentes que desarrolle</p>
            <div className='content'>
                <Link to='/TarjetaPedido' className={Page__InicioStyle.content__components}></Link>
                <a className='content__components'></a>
                <a className='content__components'></a>
                <a className='content__components'></a>
                <a className='content__components'>Proximamente</a>
            </div>
        </>
    );
};

export default PaginaInicio