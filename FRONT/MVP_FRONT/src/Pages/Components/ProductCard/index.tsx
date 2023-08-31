
import * as React from 'react'
import { Card } from "../Containers/Card/styles";
import { ButtonGlobal } from "../Buttons/ButtonGlobal";

interface ProductProps{
    Title: string;
    Description: string;
    Price: number;
    Src: string;
    Alt: string;
    Stock: number;
}

export const ProductCard: React.FC<ProductProps> = ({
    Title,
    Description,
    Price,
    Src,
    Alt,
    Stock
}) =>{
    const btnColor = !Stock? "gray" : ""; 
    const btnText = !Stock? "Acabou!": "Comprar";
    
    return(
    
        <Card>
            <div>
                <img src={Src} alt={Alt} />
            </div>
            <div>
                <h3>{Title}</h3>
                <p>{Description}</p>
            </div>
            <div>
                <h6>R${Price}</h6>
                <ButtonGlobal style={{backgroundColor: `${btnColor}`}}>{btnText}</ButtonGlobal>
            </div>
            
        </Card>
    
)}
