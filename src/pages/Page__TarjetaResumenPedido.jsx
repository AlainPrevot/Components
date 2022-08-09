import React from 'react'
import ReactDOM from 'react-dom/client'

import './style/Page__TarjetaResumenPedido.css'

import TarjetaResumenPedido from '../assets/Components/TarjetaResumenPedido'



    {/* <TarjetaResumenPedido
    titulo="Order Summary"
    parrafo="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
    precio="59.99"
    /> */}



const Page_TarjetaResumenPedido = () => {
    return(
        <TarjetaResumenPedido
        title="Resumen del pedido"
        description="Ahora puede escuchar millones de canciones, audiolibros y podcasts en cualquier dispositivo y en cualquier lugar que desee!"
        price="59.99"
        />
    )
}

export default Page_TarjetaResumenPedido