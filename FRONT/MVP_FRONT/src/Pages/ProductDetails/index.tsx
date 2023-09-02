import { useParams } from "react-router-dom";
//Styleds:
import { MainStyled, FormStyled } from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { ProductsDetailsId } from "../Components/Active/ProductDetailsId";


export default function ProductDetails() {
    const { productId } = useParams<{ productId?: string }>();
    
    console.log("Product ID:", productId);

    if(!productId){
        return (
            <>
                <HeaderMenu />
                <MainStyled>
                    <FormStyled>
                        <h1>Error: Product ID is missing</h1>
                        <p>Please provide a valid product ID.</p>
                    </FormStyled>
                </MainStyled>
                <Footer />
            </>
        );

    }
    return <>
        <HeaderMenu />
        <ProductsDetailsId productId={productId ?? '' }
        />
         
        
        <Footer />
    </>
}