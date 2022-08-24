// import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from './pages/inicio'
import Page__TarjetaResumenPedido from './pages/Page__TarjetaResumenPedido'

// const App = () => {
//     return(
//         <Router>
//             {/* <Routes path='/inicio' component={Inicio}/> */}
//             {/* <Routes path='/Inicio/TarjetaResumenPedido' component={Page__TarjetaResumenPedido}/> */}

//             <Routes>
//                 <Route path="/inicio"><Inicio/></Route>
//             </Routes>
//         </Router>
//     )
// }
import React from 'react'
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Prueba from "./prueba";
import Invoices from "./routes/invoices.jsx";


const App = () => {
    return(

        <BrowserRouter>
            <Routes>
                <Route exact path='/Components' element={<Inicio/>}/>
                <Route exact path='/TarjetaPedido' element={<Page__TarjetaResumenPedido/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App