import React from 'react';
import ReactDOM from 'react-dom/client';

import { Link } from "react-router-dom";

import StylePage__Inicio from './style/Page__Inicio.module.sass';
import Fondo from '../assets/Components/Fondo'

const PaginaInicio = () => {
    return(
        <>
            <Fondo/>
            <section className={StylePage__Inicio.section}>
                <h1 className={StylePage__Inicio.title}>Desarrollo de Componentes con React</h1>
                <p className={StylePage__Inicio.description}>Estos son algunos de los componentes que desarrolle</p>
                <div className={StylePage__Inicio.content}>
                    <Link to='/Components/ResumenPedido' className={StylePage__Inicio.content__components}></Link>
                    <Link to='/Components/CodigoQR' className={StylePage__Inicio.content__components}></Link>
                    <Link to='/Components/TarjetaDeProducto' className={StylePage__Inicio.content__components}></Link>
                    <Link to='/Components/TarjetaNFT' className={StylePage__Inicio.content__components}></Link>
                    <div className={StylePage__Inicio.content__components}>Proximamente</div>
                </div>
            </section>
        </>
    );
};

export default PaginaInicio