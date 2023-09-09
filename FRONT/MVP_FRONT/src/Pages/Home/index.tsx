
//Styleds:
import { MainStyled, FormStyled } from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import ButtonShop from '../Components/Buttons/ButtonShop';
import { HomeShopArea } from "../Components/Active/HomeShopArea";



export default function Home() {
    return <>
        <HeaderMenu />
        <MainStyled>
            <FormStyled>
                <h1>Our latest arrivals</h1>
                <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                <ButtonShop />
            </FormStyled>            
            
          
        </MainStyled>
        <HomeShopArea/>   
        
         
        
        <Footer />
    </>
}