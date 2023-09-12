
import * as React from 'react'
import { Card } from "../Containers/Card/styles";
import { ButtonGlobal } from "../Buttons/ButtonGlobal";
import { Link } from 'react-router-dom'
interface ProductProps{
    Title: string;
    Description: string;
    Price: number;
    Src: string;
    Alt: string;
    Stock: number;
    link: string;
}

export const ProductCard: React.FC<ProductProps> = ({
    Title,
    Description,
    Price,
    Src,
    Alt,
    Stock, 
    link
}) =>{
    const btnColor = !Stock? "gray" : "";
    const btnText = !Stock? "Indisponível": "Comprar";
    const enabled = !Stock? "none": "auto";
    
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
                <ButtonGlobal style={{backgroundColor: `${btnColor}`, pointerEvents :`${enabled}`}}>{<Link to={`/product/${link}`} key={link}>{btnText}</Link>}</ButtonGlobal>
            </div>
            
        </Card>
    
)}
