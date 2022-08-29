import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

import ProductoDesktop from '../assets/TarjetaProducto/ProductDesktop.jpg'
import ProductMobile from '../assets/TarjetaProducto/ProductMobile.jpg'

import TarjetaDeProducto from '../assets/Components/TarjetaDeProducto'
import StylePage__TarjetaDeProducto from './style/Page__TarjetaDeProducto.module.sass'
import Menu__TarjetaDeProducto from '../assets/Components/Menu__TarjetaDeProducto';


const Page__TarjetaDeProducto = () => {

    const [imageDesktopNew, setImageDesktopNew] = useState(ProductoDesktop);
    const [imageMobileNew, setImageMobileNew] = useState(ProductMobile);
    const [values, setValues] = useState({
        category: 'PERFUME',
        title: 'Gabrielle Esencia Eau De Parfum',
        description: 'Una interpretación floral, solar y voluptuosa compuesta por Olivier Polge, Perfumista-Creador de la Casa CHANEL.',
        price: 169.99,
        discount: 149.99
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

        setImageMobileNew(objectURL)
        setImageDesktopNew(objectURL)
    }

    return(
        <section className={StylePage__TarjetaDeProducto.section}>
            <TarjetaDeProducto
                category={values.category}
                title={values.title}
                description={values.description}
                price={parseFloat(values.price)}
                discount={parseFloat(values.discount)}
                ImagenDesktop={imageDesktopNew}
                ImagenMobile={imageMobileNew}
            />

            <Menu__TarjetaDeProducto
                PropNew={handleChange}
                ImageNew={ModifyImage}
            />
        </section>
    );
};

export default Page__TarjetaDeProducto;