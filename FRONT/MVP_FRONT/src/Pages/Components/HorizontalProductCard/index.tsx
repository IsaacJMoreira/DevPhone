
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
  size: string;
  quantity: number;
  price: string;
  imageUrl: string; // Adicione a propriedade imageUrl
}

export const HorizontalProduct = ({
  productName,
  size,
  quantity,
  price,
  imageUrl, // Receba a propriedade imageUrl
}: HorizontalProductProps): JSX.Element => {
    return (
        <HorizontalProductWrapper>
            <ProductImage>
                <img src={imageUrl} alt={productName} /> {/* Use a tag <img /> aqui */}
            </ProductImage>
            <Frame>
                <Title>{productName}</Title>
                <TextWrapper>Size: {size}</TextWrapper>
                <TextWrapper>Quantity: {quantity}</TextWrapper>
                <Price>{price}</Price>
            </Frame>
            <RemoveButton>Remove</RemoveButton>
        </HorizontalProductWrapper>
    );
};
