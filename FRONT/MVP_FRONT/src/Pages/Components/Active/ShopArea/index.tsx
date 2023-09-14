import * as React from "react";
import { ProductCard } from "../../ProductCard";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { Paginate } from "./styled";
import { CardContainer } from "../../Containers/cardContainer/styles";
import { CategorieArea } from "../CategorieArea";

type Product = {
  _id: string;
  imgURL: string;
  alt: string;
  name: string;
  price: number;
  shortDescription: string;
  link: string;
  stock: number;
};

interface ISearch {
  searchTerm?: string;
  categoriesList?: string[];
}

export const ShopArea: React.FC<ISearch> = ({ searchTerm }) => {
  const [productsTotal, setProductsTotal] = React.useState(0);
  const [productsList, setProductsList] = React.useState<Product[]>([]);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPage] = React.useState(1);
  const [status, setStatus] = React.useState(200);
  const [categories, setCategories] = React.useState<string[]>([]);
  const perPage = 8;

  const getProductList = async () => {
    try {
      const list = await axios.get(
        `${baseURL}/products`,
        {
          params: {
            page,
            perPage,
            searchTerm,
            categories,
          },
        }
      );
      setProductsList(list.data.products);
      setProductsTotal(list.data.totalProducts);
      setStatus(list.status);
      setTotalPage(list.data.totalPages);
    } catch (error) {
      setStatus(404);
    }
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategories((categories) => {
      let newList: string[] = [];
      if (event.target.checked) {
        newList = [...categories, event.target.value];
      } else {
        newList.splice(categories.indexOf(event.target.value), 1);
      }

      return newList;
    });
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  React.useEffect(() => {
    if (page > totalPages) {
      return;
    }

    getProductList(); //gets the first page to be rendered
  }, [searchTerm, categories, page]);

  return (
    <>
      <div className="CategorieSection">
        <CategorieArea onChangeFunction={handleCheck} />
      </div>
      <CardContainer>
        <div>
          <h1>
            {searchTerm
              ? `Resultados para: "${searchTerm}"`
              : "Todos os Produtos"}
          </h1>
          <div>
            <h2>
              {status !== 200
                ? "💔😭Nenhum resultado encontrado😭💔"
                : searchTerm
                ? `📱Total: ${productsTotal} produto${
                    productsTotal > 1 ? "s" : ""
                  }📱`
                : ""}
            </h2>
          </div>
          <br />
        </div>
        {productsList.map((product: Product) => {
          return (
            status === 200 && (
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
          );
        })}

        {status === 200 && (
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
        )}
      </CardContainer>
    </>
  );
};

