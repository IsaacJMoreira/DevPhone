import * as React from 'react';
import { ProductCard } from '../../ProductCard';
import axios from 'axios';
import baseURL from '../../../../../baseURL';
import { ButtonGlobal } from '../../Buttons/ButtonGlobal';

type Product = {
  _id: string;
  imgURL: string;
  alt: string;
  name: string;
  price: number;
  shortDescription: string;
  stock: number;
};

export const ShopArea = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const productsPerPage = 10;
  
    const fetchData = async () => {
        try {
          const response = await axios.get<Product[]>(`${baseURL}/product/allproducts`);
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
  
    const totalPages = Math.ceil(products.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, products.length);
  
    const goToPage = (page: number) => {
      setCurrentPage(page);
    };
  
    return (
      <>
        {products.slice(startIndex, endIndex).map((product: Product) => (
          <ProductCard
            key={`${product._id}`}
            Src={product.imgURL}
            Alt={product.alt}
            Title={product.name}
            Price={product.price}
            Description={product.shortDescription}
            Stock={product.stock}
          />
        ))}
  
        <div>
          <ButtonGlobal
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </ButtonGlobal>
          {Array.from({ length: totalPages }, (_, i) => (
            <ButtonGlobal key={i} onClick={() => goToPage(i + 1)}>
              {i + 1}
            </ButtonGlobal>
          ))}
          <ButtonGlobal
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </ButtonGlobal>
        </div>
      </>
    );
  };