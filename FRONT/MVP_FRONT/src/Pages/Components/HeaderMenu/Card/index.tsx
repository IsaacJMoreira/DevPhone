import { MainCard } from "./styled"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ItemCard from "./ItemCard";
import { CardContext } from "./ItemCard/provider";
import React from "react";

interface ICard {
    isOpen: boolean,
    closed(): void 
}


export default function Card({isOpen, closed}: ICard) {
    const { cardItem } = React.useContext(CardContext);

    const totalPrice = cardItem.reduce((acc: number, item: any) => item.price + acc , 0)

    if (!isOpen) return <div/>

    return <MainCard>
        <Link to="" className="x" onClick={closed}><FontAwesomeIcon icon={faX}/></Link>
        <div>
            {
                cardItem.map((cardItem: any) => <ItemCard key={cardItem.id} data={cardItem}/>)
            }
        </div>
        <p className="valor">Valor total: R${totalPrice}</p>
        <Link to="/shopCart" className="continuarCompra">Continuar Compra</Link>
    </MainCard>
};