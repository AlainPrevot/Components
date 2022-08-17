import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';



import TarjetaNFT from '../assets/Components/TarjetaNFT';
import './style/Page__TarjetaNFT.css'


const Page__TarjetaNFT = () => {

    const [titleNew, setTitleNew] = useState('Equilibrium');
    const [itemNew, setItemNew] = useState('3429');
    const [descriptionNew, setDescriptionNew] = useState('Nuestra colección Equilibrium promueve el equilibrio y la calma.');
    const [priceNew, setPriceNew] = useState('0.041');
    const [moneyNew, setMoneyNew] = useState('ETH');
    const [timeNew, setTimeNew] = useState('Quedan 3 días');
    const [userNew, setUserNew] = useState('Jules Wyvern');
    
    const ModifyText = (modify, element) => {

        modify(document.getElementById(element).value);

    }

    return(
        <>
            <TarjetaNFT
                title={titleNew}
                item={itemNew}
                description={descriptionNew}
                price={priceNew}
                money={moneyNew}
                time={timeNew}
                author={userNew}
            />

            <div className='hamburger-menu'>
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className='menu__btn'>
                    <span></span>
                </label>
                <div className='menu__box'>

                    <h1>Modo Edición</h1>

                    <div className='menu__box--content'>

                        <label htmlFor="title" className='label-title'>Titulo</label>
                        <textarea onKeyUp={() => ModifyText(setTitleNew, 'title')} id='title'  className='title' placeholder={titleNew} />
                        
                        <label htmlFor="item" className='label-item'>Item</label>
                        <input onKeyUp={() => ModifyText(setItemNew, 'item')} id='item' className='item' type="number" placeholder={itemNew} />

                    </div>

                    <label htmlFor="description">Descripción</label>
                    <textarea onKeyUp={() => ModifyText(setDescriptionNew, 'description')} id='description' className='description' placeholder={descriptionNew} />

                    <div className='menu__box--content'>

                        <label htmlFor="price" className='label-price'>Precio</label>
                        <input onKeyUp={() => ModifyText(setPriceNew, 'price')} id='price' className='price' type="number" placeholder={priceNew} />


                        <label htmlFor="money" className='label-money'>Moneda</label>
                        <select onChange={() => ModifyText(setMoneyNew, 'money')} name="money" id="money">
                            <option value="ETH"><span className='prueba'>ETH</span></option>
                            <option value="BTC">BTC</option>
                            <option value="BNB">BNB</option>
                            <option value="DASH">DASH</option>
                        </select>
                    </div>

                    <label htmlFor="time">Tiempo</label>
                    <textarea onKeyUp={() => ModifyText(setTimeNew, 'time')} id='time' className='time' placeholder={timeNew}/>

                    <label htmlFor="user">Usuario</label>
                    <textarea onKeyUp={() => ModifyText(setUserNew, 'user')} id='user' className='user' placeholder={userNew}/>
                </div>
            </div>
        </>
    );
};

export default Page__TarjetaNFT;