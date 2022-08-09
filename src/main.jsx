import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import CodigoQR from './CodigoQR'
import CodeQR from './assets/CodeQR.png'
import ProductoDesktop from './assets/ProductDesktop.jpg'
import ProductMobile from './assets/ProductMobile.jpg'



import Page__TarjetaResumenPedido from './pages/Page__TarjetaResumenPedido'



// import TarjetaDeProducto from './TarjetaDeProducto'



// import TarjetaNFT from './TarjetaNFT'

// import PaginaInicio from './page/inicio'

import {MenuDesplegable} from './MenuDesplegable'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CodigoQR 
    image={CodeQR}
    title="Improve your front-end skills by building projects"
    parrafo="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    /> */}

    {/* <TarjetaDeProducto
    categoria="PERFUME"
    titulo="Gabrielle Essence Eau De Parfum"
    parrafo="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
    precio="169.99"
    descuento="149.99"
    ImagenDesktop={ProductoDesktop}
    ImagenMobile={ProductMobile}
    /> */}

    {/* <TarjetaResumenPedido
    titulo="Order Summary"
    parrafo="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
    precio="59.99"
    /> */}
    {/* <MenuDesplegable/>  */}

    <Page__TarjetaResumenPedido/>

    {/* <TarjetaNFT
    titulo="Equilibrium #3429"
    parrafo="Our Equilibrium collection promotes balance and calm."
    precio="0.041 ETH"
    tiempo="3 days left"
    autor="Jules Wyvern"
    /> */}

    {/* <PaginaInicio/> */}

  </React.StrictMode>
)
