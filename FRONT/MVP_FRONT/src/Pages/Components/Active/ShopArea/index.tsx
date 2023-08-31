import * as React from 'react'
import { ProductCard } from '../../ProductCard'
import axios from 'axios'
import baseURL from '../../../../../baseURL'
import { ButtonGlobal } from '../../Buttons/ButtonGlobal'


type Product = {
    _id: string;
    imgURL: string;
    alt: string;
    name: string;
    price: number;
    shortDescription: string;
    stock: number
}

export const ShopArea = ()=>{


    const [products, setProducts] = React.useState<Product[]>([]);
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

    
        try {
            //TODO: Remove all the logs!!!
            console.log("Total de produtos:",products.data.length);
            const fullPages = Math.floor(products.data.length/10);
            const remeinderOfProducts = products.data.length%10; 
            console.log("Pgs completas:",fullPages, "|Última pg terá:", remeinderOfProducts, "produtos");
            const pages: number = fullPages + (remeinderOfProducts > 0? 1 : 0);
            console.log("Total de pgs: ", pages);
            for(let i = 0; i < fullPages; i++){
                 toRender.push([]);
                
                for(let j = 0; j < 10; j++){
                    toRender[i].push(products.data[i*10+j]);
                }
            }

            if(remeinderOfProducts) toRender.push([]);

            for(let i = 10 * fullPages ; i < 10 * fullPages + remeinderOfProducts; i++ ){
                
                toRender[fullPages].push(products.data[i]);
            }

            console.log("O novo array de produtos agora é assim:",toRender);

        } catch (error) {
            console.log("erro ao buscar dados: ", error);   
        }
        

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

            <div>
            <ButtonGlobal>1</ButtonGlobal>
            </div>
            
        </>      
    ); 
    
};