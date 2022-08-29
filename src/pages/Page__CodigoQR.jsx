import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';


import CodigoQR from '../assets/Components/CodigoQR'
import CodeQR from '../assets/QR-Linkdln.jpg'

import StylePage__CodigoQR from './style/Page__CodigoQR.module.sass'
import Menu__CodigoQR from '../assets/Components/Menu__CodigoQR';


const Page__CodigoQR = () => {

    const [ImageQRNew, setImageQRNew] = useState(CodeQR);    
    const [values, setValues] = useState({
        title: 'Desarrollador Front-End',
        description: 'Escanee el código QR para visitar mi perfil de Linkdln y obtener mas información'
    })

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const ModifyImage = () => {

        const file = document.getElementById('inputImagen').files

        const objectURL = URL.createObjectURL(file[0])

        setImageQRNew(objectURL)
    }


    return(
        <section className={StylePage__CodigoQR.section}>
            <CodigoQR 
                image={ImageQRNew}
                title={values.title}
                description={values.description}
            />

            <Menu__CodigoQR
                TextNew={handleChange}
                ImageNew={ModifyImage}
            />
        </section>
    );
};

export default Page__CodigoQR;