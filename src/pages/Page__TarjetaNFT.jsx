import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';



import TarjetaNFT from '../assets/Components/TarjetaNFT';
import StylePage__TarjetaNFT from './style/Page__TarjetaNFT.module.sass'
import Menu__TarjetaNFT from '../assets/Components/Menu__TarjetaNFT';
import Boton__Retroceso from '../assets/Components/Boton__Retroceso';


const Page__TarjetaNFT = () => {

    const [values, setValues] = useState({
        title: 'Equilibrium',
        item: '3429',
        description: 'Nuestra colección Equilibrium promueve el equilibrio y la calma.',
        price: 0.041,
        money: 'ETH',
        time: 'Quedan 3 días',
        user: 'Jules Wyvern'
    })

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return(
        <section className={StylePage__TarjetaNFT.section}>
            <Boton__Retroceso/>
            <TarjetaNFT
                title={values.title}
                item={parseInt(values.item)}
                description={values.description}
                price={parseFloat(values.price)}
                money={values.money}
                time={values.time}
                author={values.user}
            />

            <Menu__TarjetaNFT
                TextNew={handleChange}
            />

        </section>
    );
};

export default Page__TarjetaNFT;