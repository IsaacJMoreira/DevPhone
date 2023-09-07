
import {
  HorizontalProductWrapper,
  ProductImage,
  Frame,
  Title,
  TextWrapper,
  Price,
  RemoveButton,
} from "./styled";

interface HorizontalProductProps {
  productName: string;
  categoria: string;
  quantidade: number;
  preco: string;
  imageUrl: string; // Adicione a propriedade imageUrl
}

export const HorizontalProduct = ({
  productName,
  categoria,
  quantidade,
  preco,
  imageUrl, // Receba a propriedade imageUrl
}: HorizontalProductProps): JSX.Element => {
    return (
        <HorizontalProductWrapper>
            <ProductImage>
                <img src={imageUrl} alt={productName} />
            </ProductImage>
            <Frame>
                <Title>{productName}</Title>
                <TextWrapper>Categoria: {categoria}</TextWrapper>
                <TextWrapper>Quantidade: {quantidade}</TextWrapper>
                <Price>{preco}</Price>
            </Frame>
            <RemoveButton>Retirar</RemoveButton>
        </HorizontalProductWrapper>
    );
};
