import {IconMusic, IllustrationHero} from "./assets/icon/IconTarjetaResumenPedido.jsx";
import './style/TarjetaResumenPedido.css'

const TarjetaResumenPedido = ({titulo, parrafo, precio}) => {
    return(

        <div className="tarjeta">
            <IllustrationHero className="imagen"/>
            <div className="tarjeta--content">
                <h1 id="prueba" >{titulo}</h1>
                <p>{parrafo}</p>
                <div className="tarjeta--content__precio">
                    <IconMusic className="prueba"/>
                    <h2>Annual Plan</h2>
                    <h3>{precio}</h3>
                    <a href="">Change</a>
                </div>
                <button className="ProcedeCompra">Proceed to Payment</button>
                <button className="CancelaCompra">Cancel Order</button>

            </div>
        </div>
    );
};
export default TarjetaResumenPedido;