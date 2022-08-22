import React from 'react'
import ReactDOM from 'react-dom/client'
import Fondo from './assets/Components/Fondo'





// import Page__TarjetaResumenPedido from './pages/Page__TarjetaResumenPedido'
// import Page__TarjetaNFT from './pages/Page__TarjetaNFT'

// import Page__CodigoQR from './pages/Page__CodigoQR'
// import Page__TarjetaDeProducto from './pages/Page__TarjetaDeProducto'




import PaginaInicio from './pages/inicio'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <Page__CodigoQR/> */}
    {/* <Page__TarjetaDeProducto/> */}
    {/* <Page__TarjetaResumenPedido/> */}
    {/* <Page__TarjetaNFT/> */}

    <PaginaInicio/>
    <Fondo/>

  </React.StrictMode>
)
