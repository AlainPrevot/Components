import {IconMusic, IllustrationHero} from "../../image/TarjetaResumenPedido/IconTarjetaResumenPedido.jsx";
import StyleTarjetaResumenPedido from './style/TarjetaResumenPedido.module.sass';

const TarjetaResumenPedido = ({title, description, price}) => {
    return(
        <div className={StyleTarjetaResumenPedido.card}>

            <IllustrationHero className={StyleTarjetaResumenPedido.card__image}/>

            <div className={StyleTarjetaResumenPedido.card__content}>

                <h1 className={StyleTarjetaResumenPedido.card__title}>{title}</h1>
                <p className={StyleTarjetaResumenPedido.card__description}>{description}</p>

                <div className={StyleTarjetaResumenPedido.card__price}>

                    <IconMusic className={StyleTarjetaResumenPedido.card__price__iconMusic}/>
                    <h2>Plan Anual</h2>
                    <h3>{price}</h3>
                    <a href="">Cambiar</a>

                </div>

                <button className={StyleTarjetaResumenPedido.card__content__btnProceed}>Proceder al pago</button>
                <button className={StyleTarjetaResumenPedido.card__content__btnCancel}>Cancelar</button>

            </div>
        </div>
    );
};
export default TarjetaResumenPedido;