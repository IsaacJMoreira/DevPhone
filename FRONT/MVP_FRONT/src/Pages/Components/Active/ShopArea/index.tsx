import * as React from 'react'
import { ProductCard } from '../../ProductCard'
import axios from 'axios'
import baseURL from '../../../../../baseURL';
import { Paginate } from './styled';
import { CardContainer } from '../../Containers/cardContainer/styles';
import { CategorieArea } from '../CategorieArea';



type Product = {
    _id: string;
    imgURL: string;
    alt: string;
    name: string;
    price: number;
    shortDescription: string;
    link: string;
    stock: number,
}

interface ISearch {
    searchTerm?: string;
}


export const ShopArea: React.FC<ISearch> = ({
    searchTerm,
}) => {

    const [productsList, setProductsList] = React.useState<Product[]>([]);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPage] = React.useState(1);
    const perPage = 8;

    const getProductList = async () => {
        try {
            const list = await axios.get(`${baseURL}/products/?page=${page}&perPage=${perPage}&searchTerm=${searchTerm}`);
            setProductsList(list.data.products);

            setTotalPage(list.data.totalPages)
        } catch (error) {
            console.log(error);
        }

    }


    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        console.log(
            `User requested page number ${event.selected}`
        );
        setPage(event.selected + 1);
    };

    React.useEffect(() => {

        if (page > totalPages) {
            return
        }

        getProductList();//gets the first page to be rendered


    }, [searchTerm]);

    return (

        <>
            <div className="CategorieSection">
                <CategorieArea />
            </div>
            <CardContainer>
                <div>
                    <h1>{searchTerm? `Reseultados para: "${searchTerm}"`: "Todos os Produtos"}</h1>
                    <br />
                </div>
                {productsList.map((product: Product) => {
                    return (
                        <ProductCard
                            key={`${product._id}`}
                            Src={product.imgURL}
                            Alt={product.alt}
                            Title={product.name}
                            Price={product.price}
                            Description={product.shortDescription}
                            Stock={product.stock}
                            link={product._id}
                        />
                    )
                })}

                <div>
                    <Paginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                    />
                </div>

            </CardContainer>


            {/*<input type="number" value={perPage} onChange={(e)=> setPerPage(Number(e.target.value))} />*/}



        </>
    );


}
