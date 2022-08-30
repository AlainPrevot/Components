import React from 'react';
import ReactDOM from 'react-dom/client';
import StylePage__TarjetaResumenPedido from './style/Page__TarjetaResumenPedido.module.sass'
import TarjetaResumenPedido from '../assets/Components/TarjetaResumenPedido';
import Boton__Retroceso from '../assets/Components/Boton__Retroceso';

const Page_TarjetaResumenPedido = () => {
    return(
        <section className={StylePage__TarjetaResumenPedido.section}>
            <Boton__Retroceso/>
            <TarjetaResumenPedido
                title="Resumen del pedido"
                description="Ahora puede escuchar millones de canciones, audiolibros y podcasts en cualquier dispositivo y en cualquier lugar que desee!"
                price="59.99"
            />
        </section>
    );
};

export default Page_TarjetaResumenPedido;