import './style/TarjetaDeProducto.css'
import ImagenMobile from './assets/ProductMobile.jpg'


const TarjetaDeProducto = ({categoria, titulo, parrafo, precio, descuento, imagen}) =>{
    return(
        <div className='tarjeta'>
            <img src={imagen} alt="" />
            {/* <img src={ImagenMobile} alt="" /> */}
            <div className='tarjeta--content'>
                <h3>{categoria}</h3>
                <h1>{titulo}</h1>
                <p>{parrafo}</p>
                <div className='tarjeta--content__precio'>
                    <h2 className='descuento'>{descuento}</h2>
                    <h2 className='precio'>{precio}</h2>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default TarjetaDeProducto;