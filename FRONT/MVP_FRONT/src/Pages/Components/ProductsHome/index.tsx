
import * as React from 'react'
import { CardHome } from './styled';


interface ProductProps {
    Title: string;
    Description: string;
    Price: number;
    Src: string;
    Alt: string;

}

export const ProductsHome: React.FC<ProductProps> = ({
    Title,
    Description,
    Price,
    Src,
    Alt,

}) => {

    return (
        <CardHome>
          <div>
            <img src={Src} alt={Alt} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <div>
            <h3>{Title}</h3>
            <p>{Description}</p>
            <h6>R${Price}</h6>
          </div>
        </CardHome>
      );
    };