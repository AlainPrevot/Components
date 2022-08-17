import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';


import CodigoQR from '../CodigoQR'
import CodeQR from '../assets/CodeQR.png'

import './style/Page__CodigoQR.css'
import Menu__CodigoQR from '../assets/Components/Menu__CodigoQR';


const Page__CodigoQR = () => {

    const [ImageQRNew, setImageQRNew] = useState(CodeQR);
    const [titleNew, setTitleNew] = useState("Improve your front-end skills by building projects");
    const [descriptionNew, setDescriptionNew] = useState("Scan the QR code to visit Frontend Mentor and take your coding skills to the next level");
    
    const ModifyText = (modify, element) => {

        modify(document.getElementById(element).value);

    }

    const ModifyImage = () => {

        const file = document.getElementById('inputImagen').files

        const objectURL = URL.createObjectURL(file[0])

        setImageQRNew(objectURL)
    }


    return(
        <>
            <CodigoQR 
            image={ImageQRNew}
            title={titleNew}
            parrafo={descriptionNew}
            />

            <Menu__CodigoQR
            TextNew={ModifyText}
            ImageNew={ModifyImage}
            />


            {/* <div className='hamburger-menu'>
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className='menu__btn'>
                    <span></span>
                </label>
                <div className='menu__box'>

                    <h1>Modo Edición</h1>

                    <label htmlFor="inputImagen" className='label-category'>QR</label>
                    <label htmlFor="inputImagen" className='label-inputImagen' id='label-inputImagen'>Seleccionar Archivo</label>
                    <input accept='image/*' id='inputImagen' type="file" onChange={ModifyImage}/>


                    <label htmlFor="title" className='label-title'>Titulo</label>
                    <textarea onChange={() => ModifyText(setTitleNew, 'title')} id='title'  className='title' placeholder={titleNew} />

                    <label htmlFor="description">Descripción</label>
                    <textarea onChange={() => ModifyText(setDescriptionNew, 'description')} id='description' className='description' placeholder={descriptionNew} />

                </div>
            </div> */}
        </>
    );
};

export default Page__CodigoQR;