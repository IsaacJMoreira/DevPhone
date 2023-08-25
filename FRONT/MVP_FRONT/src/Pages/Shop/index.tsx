

//Styleds:
import {  BodyStyled } from "./styled"
import { ShopArea } from "../Components/ShopArea";

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { CardContainer } from "../Components/CardContainer/styles";




export default function Shop() {
    return <BodyStyled>
        <HeaderMenu />
           
            <CardContainer> 
                
                <ShopArea />   
                      

            </CardContainer>
      
        <Footer />
    </BodyStyled>
}