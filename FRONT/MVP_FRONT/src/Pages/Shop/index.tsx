

//Styleds:

import { ShopArea } from "../Components/Active/ShopArea";
import { CategorieArea } from "../Components/Active/CategorieArea";
import { BodySection } from "./styled";

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { CardContainer } from "../Components/Containers/cardContainer/styles";




export default function Shop() {
    return <>
        <HeaderMenu />
            <BodySection>
                <div className="CategorieSection"> 
                    <CategorieArea /> 
                </div>
            
                <CardContainer> 
                    <div>
                        <h1>{"Compre"}</h1>
                    </div>
                    
                    <ShopArea />
                </CardContainer>
            </BodySection>   
        <Footer />
    </>
}