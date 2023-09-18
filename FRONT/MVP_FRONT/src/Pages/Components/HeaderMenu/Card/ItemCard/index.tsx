import React from "react";
import { SectionStyled } from "./styled"
import { CardContext } from "./provider";
type Idata = {
    data: any
}
function ItemCard({ data }: Idata) {

    const { _id ,imgURL, name, price, description } = data;

    const {cardItem, setCardItem} = React.useContext(CardContext);
 
    const removerItem = () => {
        const remover = cardItem.filter((item:any) => item._id !== _id);
        setCardItem(remover)
    };

    return <>
    <SectionStyled>
        <img 
        src={imgURL} 
        alt="imagem do produto" 
        />

        <div className="conteudo-do-item">
            <h3>{name}</h3>
            <p>R$ {price}</p>
            <p className="descricao">{description}</p>
            <button className="remover" onClick={removerItem}>remover</button>
        </div>
    </SectionStyled>
    </>
}

export default ItemCard;