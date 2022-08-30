import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from "react-router-dom";
import StyleBoton__Retroceso from './style/Boton__Retroceso.module.sass'

const Boton__Retroceso = () => {
    return(
        <Link to='/Components' className={StyleBoton__Retroceso.button}/>
    )

}
export default Boton__Retroceso