import React from 'react';
import ReactDOM from 'react-dom/client';

// import './style/inicio.css';
import './style/Page__Inicio.css';

const PaginaInicio = () => {
    return(
        <>
            <h1>Desarrollo de Componentes con React</h1>
            <p>Estos son algunos de los componentes que desarrolle</p>
            <div className='content'>
                <a className='content__components'></a>
                <a className='content__components'></a>
                <a className='content__components'></a>
                <a className='content__components'></a>
                <a className='content__components'>Proximamente</a>
            </div>
        </>
    );
};

export default PaginaInicio