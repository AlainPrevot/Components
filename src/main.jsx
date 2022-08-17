import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import CodigoQR from './CodigoQR'
import CodeQR from './assets/CodeQR.png'




// import Page__TarjetaResumenPedido from './pages/Page__TarjetaResumenPedido'
// import Page__TarjetaNFT from './pages/Page__TarjetaNFT'
// import Page__TarjetaDeProducto from './pages/Page__TarjetaDeProducto'

import Page__CodigoQR from './pages/Page__CodigoQR'




// import PaginaInicio from './page/inicio'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CodigoQR 
    image={CodeQR}
    title="Improve your front-end skills by building projects"
    parrafo="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
    /> */}

    <Page__CodigoQR/>

    {/* <MenuDesplegable/>  */}

    {/* <Page__TarjetaResumenPedido/> */}
    {/* <Page__TarjetaNFT/> */}
    {/* <Page__TarjetaDeProducto/> */}


    {/* <PaginaInicio/> */}

  </React.StrictMode>
)
