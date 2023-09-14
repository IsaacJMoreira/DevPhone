import * as React from "react";
import axios from "axios";
import baseURL from "../../../../../baseURL";
import { Link } from "react-router-dom";
import { ProductCard } from "../../ProductCard";
import { CustomCardContainer } from "../../Active/HomeShopArea/styles";

type Product = {
  _id: string;
  imgURL: string;
  alt: string;
  name: string;
  shortDescription: string;
  products: any;
};
export const HomeShopArea = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Product>(
        `${baseURL}/products/?page=1&perPage=3`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching data", error);
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
      <CustomCardContainer style={{ width: "100%", height: "650px" }}>
        {products.map((product: Product) => (
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
        ))}
      </CustomCardContainer>
    </>
  );
};
