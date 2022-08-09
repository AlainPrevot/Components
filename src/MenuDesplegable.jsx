import React from 'react'   
import ReactDom from 'react-dom/client'
import {useState} from 'react'


import './style/MenuDesplegable.css'




export const MenuDesplegable = () => {
    
    const [textonuevo, setTextoNuevo] = useState('hola'); 
    
    const ModificaTexto = () => {
        setTextoNuevo(document.getElementById('texto').value);
        console.log('HOLA');
        
    }
    
    // document.getElementById('texto').addEventListener('keyup', (e) => {
        
    //     // console.log('hola')

    // });


    
    
    

    
    
    
    // return(
    //     <div>

    //         <h1 className='title'>{textonuevo}</h1>

    //         <input onKeyUp={ModificaTexto} id='texto' className='texto' type="text" />

    //     </div>
    // );


    return(
        <div className='hamburger-menu'>
            <input type="checkbox" id="menu__toggle" />
            <label htmlFor="menu__toggle" className='menu__btn'>
                <span></span>
            </label>
            <div className='menu__box'>

            </div>
        </div>
    )
};



