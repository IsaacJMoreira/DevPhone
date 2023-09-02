import * as React from 'react'
import { ProductsHome } from '../../ProductsHome'
import axios from 'axios'
import baseURL from '../../../../../baseURL'
import { CardProd } from './styles'

type Product = {
    _id: string;
    imgURL: string;
    alt: string;
    name: string;
    price: number;
    shortDescription: string;
    stock: number;
}

export const HomeShopArea = () => {
    const [products, setProducts] = React.useState<Product[]>([]);
    
    try {
        React.useEffect(() => {
            axios.get<Product[]>(`${baseURL}/allproducts`)
                .then((response) => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.log("Error fetching data", error);
                });
        }, []);
    } catch (error) {
        console.log(error);
    }

    try {
        console.log("Total de produtos:", products.length);

        const productsPerPage = 3;
        const fullPages = Math.floor(products.length / productsPerPage);
        const remainderOfProducts = products.length % productsPerPage;
        console.log("Pgs completas:", fullPages, "|Última pg terá:", remainderOfProducts, "produtos");
        const pages: number = fullPages + (remainderOfProducts > 0 ? 1 : 0);
        console.log("Total de pgs: ", pages);

        const toRender: Product[][] = [];

        for (let i = 0; i < fullPages; i++) {
            toRender.push(products.slice(i * productsPerPage, (i + 1) * productsPerPage));
        }

        if (remainderOfProducts) {
            toRender.push(products.slice(fullPages * productsPerPage));
        }


        return (
            <>
                {toRender[0] && toRender[0].map((product: Product) => (
                    <CardProd>
                    <ProductsHome
                        key={`${product._id}`}
                        Src={product.imgURL}
                        Alt={product.alt}
                        Title={product.name}
                        Description={product.shortDescription}
                    />
                    </CardProd>
                ))}
                
            </>
        );
    } catch (error) {
        console.log("erro ao buscar dados: ", error);
    }

    return null;
};