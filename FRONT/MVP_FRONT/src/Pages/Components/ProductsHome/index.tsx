
import * as React from 'react'
import { CardHome } from './styled';


interface ProductProps {
    Title: string;
    Description: string;
    Src: string;
    Alt: string;

}

export const ProductsHome: React.FC<ProductProps> = ({
    Title,
    Description,
    Src,
    Alt,

}) => {

    return (

        <CardHome>
            <div>
                <img src={Src} alt={Alt} />
            </div>
            <div>
                <h3>{Title}</h3>
                <p>{Description}</p>
            </div>

        </CardHome>



    )
}
