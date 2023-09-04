import React from "react";
import { ProductContainer, ProductImage, ProductInfo, ProductName, ProductDescription, ProductPrice } from "./styled";

interface ProductProps {
  Title: string;
  Description: string;
  Price: number;
  Src: string;
  Alt: string;
}

export const ProductCart: React.FC<ProductProps> = ({
  Title,
  Description,
  Price,
  Src,
  Alt,
}) => {
  return (
    <ProductContainer>
      <ProductImage src={Src} alt={Alt} />
      <ProductInfo>
        <ProductName>{Title}</ProductName>
        <ProductDescription>{Description}</ProductDescription>
        <ProductPrice>R${Price}</ProductPrice>
      </ProductInfo>
    </ProductContainer>
  );
};