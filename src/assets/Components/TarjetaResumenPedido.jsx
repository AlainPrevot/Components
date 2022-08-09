import {IconMusic, IllustrationHero} from "../icon/IconTarjetaResumenPedido.jsx";
import '../../style/TarjetaResumenPedido.css';

const TarjetaResumenPedido = ({title, description, price}) => {
    return(

        <div className="card">

            <IllustrationHero className="card--image"/>

            <div className="card--content">

                <h1>{title}</h1>
                <p>{description}</p>

                <div className="card--price">

                    <IconMusic className="card--price__iconMusic"/>
                    <h2>Plan Anual</h2>
                    <h3>{price}</h3>
                    <a href="">Cambiar</a>

                </div>

                <button className="card--content__btnProceed">Proceder al pago</button>
                <button className="card--content__btnCancel">Cancelar</button>

            </div>
        </div>
    );
};
export default TarjetaResumenPedido;