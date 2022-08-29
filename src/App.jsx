
import Inicio from './pages/inicio'
import Page__TarjetaResumenPedido from './pages/Page__TarjetaResumenPedido'
import Page__CodigoQR from './pages/Page__CodigoQR'
import Page__TarjetaDeProducto from './pages/Page__TarjetaDeProducto'
import Page__TarjetaNFT from './pages/Page__TarjetaNFT'

import React from 'react'
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


const App = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route exact path='/Components' element={<Inicio/>}/>
                <Route exact path='/Components/ResumenPedido' element={<Page__TarjetaResumenPedido/>}/>
                <Route exact path='/Components/CodigoQR' element={<Page__CodigoQR/>}/>
                <Route exact path='/Components/TarjetaDeProducto' element={<Page__TarjetaDeProducto/>}/>
                <Route exact path='/Components/TarjetaNFT' element={<Page__TarjetaNFT/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App