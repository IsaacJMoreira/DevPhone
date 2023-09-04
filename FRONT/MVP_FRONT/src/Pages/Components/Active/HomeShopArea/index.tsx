import * as React from 'react'
import { ProductsHome } from '../../ProductsHome'
import axios from 'axios'
import baseURL from '../../../../../baseURL'
import { CardProd } from './styles'
import { Link } from 'react-router-dom'

type Product = {
  _id: string;
  imgURL: string;
  alt: string;
  name: string;
  shortDescription: string;

}
export const HomeShopArea = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const productsToShow = 3;

  const fetchData = async () => {
    try {
      const response = await axios.get<Product[]>(`${baseURL}/allproducts`);
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!products.length) {
    return (
      <>
        <h6>Sorry, nothing to buy here</h6>
      </>
    );
  }



  return (
    <>
      {products.slice(0, productsToShow).map((product: Product) => (
        <Link to={`/product/${product._id}`} key={product._id}>
          <CardProd key={product._id}>
            <ProductsHome
              key={`${product._id}`}
              Src={product.imgURL}
              Alt={product.alt}
              Title={product.name}
              Description={product.shortDescription}
            />
          </CardProd>
        </Link>
      ))}
    </>
  );
};