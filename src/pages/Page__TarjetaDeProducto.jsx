import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

import ProductoDesktop from '../assets/TarjetaProducto/ProductDesktop.jpg'
import ProductMobile from '../assets/TarjetaProducto/ProductMobile.jpg'

import TarjetaDeProducto from '../assets/Components/TarjetaDeProducto'
import './style/Page__TarjetaDeProducto.css'


const Page__TarjetaDeProducto = () => {

    const [categoryNew, setCategoryNew] = useState('PERFUME');
    const [titleNew, setTitleNew] = useState('Gabrielle Esencia Eau De Parfum');
    const [descriptionNew, setDescriptionNew] = useState('Una interpretación floral, solar y voluptuosa compuesta por Olivier Polge, Perfumista-Creador de la Casa CHANEL.');
    const [priceNew, setPriceNew] = useState(169.99);
    const [discountNew, setDiscountNew] = useState(149.99);
    const [imageDesktopNew, setImageDesktopNew] = useState(ProductoDesktop);
    const [imageMobileNew, setImageMobileNew] = useState(ProductMobile);
    
    const ModifyText = (modify, element) => {

        modify(document.getElementById(element).value);

    }

    const ModifyImage = () => {

        const file = document.getElementById('inputImagen').files

        const objectURL = URL.createObjectURL(file[0])

        setImageMobileNew(objectURL)
        setImageDesktopNew(objectURL)
    }


    return(
        <>
            <TarjetaDeProducto
                category={categoryNew}
                title={titleNew}
                description={descriptionNew}
                price={priceNew}
                discount={discountNew}
                ImagenDesktop={imageDesktopNew}
                ImagenMobile={imageMobileNew}
            />

            <div className='hamburger-menu'>
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className='menu__btn'>
                    <span></span>
                </label>
                <div className='menu__box'>

                    <h1>Modo Edición</h1>

                    <label htmlFor="inputImagen" className='label-category'>Producto</label>
                    <label htmlFor="inputImagen" className='label-inputImagen' id='label-inputImagen'>Seleccionar Archivo</label>
                    <input accept='image/*' id='inputImagen' type="file" onChange={ModifyImage}/>

                    <label htmlFor="category" className='label-category'>Categoría</label>
                    <select onChange={() => ModifyText(setCategoryNew, 'category')} name="category" id="category">
                        <option value="PERFUME">PERFUME</option>
                        <option value="CALZADO">CALZADO</option>
                        <option value="MAQUILLAJE">MAQUILLAJE</option>
                        <option value="LABIAL">LABIAL</option>
                    </select>

                    <label htmlFor="title" className='label-title'>Titulo</label>
                    <textarea onChange={() => ModifyText(setTitleNew, 'title')} id='title'  className='title' placeholder={titleNew} />

                    <label htmlFor="description">Descripción</label>
                    <textarea onChange={() => ModifyText(setDescriptionNew, 'description')} id='description' className='description' placeholder={descriptionNew} />

                    <div className='menu__box--content'>

                        <label htmlFor="discount" className='label-discount'>Descuento</label>
                        <input onChange={() => ModifyText(setDiscountNew, 'discount')} id='discount' className='discount' type="number" value={discountNew} /> 

                        <label htmlFor="price" className='label-price'>Precio</label>
                        <input onChange={() => ModifyText(setPriceNew, 'price')} id='price' className='price' type="number" value={priceNew} />

                    </div>

                </div>
            </div>
        </>
    );
};

export default Page__TarjetaDeProducto;