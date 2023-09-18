import * as React from 'react';
import axios from 'axios';
import baseURL from '../../../../../baseURL';
import { Link } from 'react-router-dom';
import { ProductDetailsSection, DivImg, ProductsSection, DivGroupBut, ButtonShopCheckout } from './styles';


type Product = {
  _id: string;
  imgURL: string;
  alt: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  stock: number;
};

interface ProductsDetailsIdProps {
  productId: string; // Pass the productId as a prop
}

export const ProductsDetailsId: React.FC<ProductsDetailsIdProps> = ({ productId }) => {
  const [product, setProduct] = React.useState<Product | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<Product>(`${baseURL}/product/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [productId]);

  if (!product) {
    return (
      <>
        <h1>Error: Product ID is missing</h1>
        <p>Please provide a valid product ID.</p>
      </>
    );
  }

  return (
    <>
      <ProductsSection>
      <DivImg>
        <img
          src={product.imgURL}
          alt={product.alt}
          style={{ width: '350px', height: '350px' }} 
        />
      </DivImg>
        <ProductDetailsSection>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>Price: R$ {product.price.toFixed(2)}</h2>
          <DivGroupBut>
          <Link to="/shop"><ButtonShopCheckout>Add to Cart</ButtonShopCheckout></Link>
          <Link to="/shopCart"><ButtonShopCheckout>Buy Now</ButtonShopCheckout></Link>
          </DivGroupBut>
        </ProductDetailsSection>
      </ProductsSection>
    </>
  );
};
