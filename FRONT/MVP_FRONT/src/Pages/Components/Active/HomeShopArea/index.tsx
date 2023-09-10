import * as React from 'react'
import { ProductsHome } from '../../ProductsHome'
import axios from 'axios'
import baseURL from '../../../../../baseURL'
import { Link } from 'react-router-dom'
import { CardContainerHome } from '../../../Home/styled'


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
      const response = await axios.get<Product[]>(`${baseURL}/products/?page=1&perPage=5`);
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

  
  const displayedProducts = products.slice(0, productsToShow);

  return (
    <>
      <CardContainerHome style={{ width: "100vw" }}>
        {displayedProducts.map((product: Product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <ProductsHome
              key={product._id}
              Src={product.imgURL}
              Alt={product.alt}
              Title={product.name}
              Price={product.price}
              Description={product.shortDescription}

            />
          </Link>
        ))}
      </CardContainerHome>
    </>
  );
};
