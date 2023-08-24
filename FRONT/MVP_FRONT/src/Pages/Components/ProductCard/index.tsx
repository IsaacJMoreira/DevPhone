
import * as React from 'react'
import { Card } from "../Card/styles";
import ButtonGlobal from "../ButtonGlobal";

interface ProductProps{
    Title: string;
    Description: string;
    Price: number;
    Src: string;
    Alt: string;
}

export const ProductCard: React.FC<ProductProps> = ({
    Title,
    Description,
    Price,
    Src,
    Alt,
}) =>(
    <>
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
                <ButtonGlobal />
            </div>
            
        </Card>
    </>
)
