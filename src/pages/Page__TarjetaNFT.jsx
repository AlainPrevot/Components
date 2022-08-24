import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';



import TarjetaNFT from '../assets/Components/TarjetaNFT';
import './style/Page__TarjetaNFT.css'
import Menu__TarjetaNFT from '../assets/Components/Menu__TarjetaNFT';


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
        <>
            <TarjetaNFT
                title={values.title}
                item={values.item}
                description={values.description}
                price={values.price}
                money={values.money}
                time={values.time}
                author={values.user}
            />

            <Menu__TarjetaNFT
                TextNew={handleChange}
            />

        </>
    );
};

export default Page__TarjetaNFT;