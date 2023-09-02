<<<<<<< HEAD
import * as React from 'react'
import { ProductCard } from '../../ProductCard'
import axios from 'axios'
import { DivStyled } from "./styles"
import baseURL from '../../../../../baseURL'
import { ButtonShoparea } from '../../Buttons/ButtonGlobal'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


=======
import * as React from 'react';
import { ProductCard } from '../../ProductCard';
import axios from 'axios';
import baseURL from '../../../../../baseURL';
import { ButtonGlobal } from '../../Buttons/ButtonGlobal';
>>>>>>> b0afca8 (incluindo a rota para produto por id)

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
<<<<<<< HEAD
    let toRender: any = [];
    
   

    try{
        React.useEffect ( ()=>{

            axios.get<Product[]>(`${baseURL}/allproducts`).then((response)=>{
                setProducts(response);
            } )
            .catch(error=>{
                console.log("Error fetching data", error);
            });

            
        }, []);
        }catch(error){
            console.log(error);
        }

    
=======
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const productsPerPage = 10;
  
    const fetchData = async () => {
>>>>>>> b0afca8 (incluindo a rota para produto por id)
        try {
          const response = await axios.get<Product[]>(`${baseURL}/product/allproducts`);
          setProducts(response.data);
        } catch (error) {
          console.log('Error fetching data', error);
        }
<<<<<<< HEAD
        

    if(!products.data) return (
        <>
            <h6>Sorry, nothing to buy here</h6>
        </>
    );

    return (
        <>
               
            {toRender[0].map((product: Product)=>{
                        return(
                            
                        <ProductCard
                        key = {`${product._id}`}
                        Src = {product.imgURL} 
                        Alt = {product.alt}
                        Title= {product.name}
                        Price= {product.price}
                        Description= {product.shortDescription}
                        Stock={product.stock}
                        />

                        )
                    

                    })
                    
            }  

            <DivStyled>
            <ButtonShoparea>1</ButtonShoparea><label>de 10</label><Link to="/" className='seguinte'>Seguinte <FontAwesomeIcon icon={faArrowRight}/></Link>
            </DivStyled>
            
        </>      
    ); 
=======
      };
>>>>>>> b0afca8 (incluindo a rota para produto por id)
    
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