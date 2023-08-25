import * as React from 'react'
import { ProductCard } from '../ProductCard'
import axios from 'axios'
import baseURL from '../../../../baseURL'


type Product = {
    _id: string;
    imgURL: string;
    alt: string;
    name: string;
    price: number;
    shortDescription: string;
}

export const ShopArea = ()=>{


    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect ( ()=>{
        axios.get<Product[]>(`${baseURL}/product/allproducts`).then((response)=>{
            setProducts(response);
        } )
        .catch(error=>{
            console.log("Error fetching data", error);
        });
    }, [])

    if(!products.data) return (
        <>
            <h6>Sorry, nothing to buy here</h6>
        </>
    );

    return (
        <>
               
            {products.data.map((product: Product)=>{
                        return(
                            
                        <ProductCard
                        className = "PIG"
                        Src = {product.imgURL} 
                        Alt = {product.alt}
                        Title= {product.name}
                        Price= {product.price}
                        Description= {product.shortDescription}
                        />

                        )
                    

                    })
            }  
        </>      
    ); 
    
};