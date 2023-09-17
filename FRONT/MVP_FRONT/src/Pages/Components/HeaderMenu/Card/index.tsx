import { MainCard } from "./styled"
import MotoG from "../../../../img/Moto E antigo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface ICard {
    isOpen: boolean,
    closed(): void 
}


export default function Card({isOpen, closed}: ICard) {


    if (!isOpen) return <div/>

    return <MainCard>
        <Link to="" className="x" onClick={closed}><FontAwesomeIcon icon={faX}/></Link>
        <section>
            <img src={MotoG} width={100}></img>
            <div className="info">
            <h4>Sansung</h4>
            <p>Melhor celular já produzido!</p>
            <button>remover</button>
            </div>
        </section>
        <Link to="" className="continuarCompra">Continuar Compra</Link>
    </MainCard>
};