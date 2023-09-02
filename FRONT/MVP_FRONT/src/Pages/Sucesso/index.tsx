

//Styleds:
import { BodySection } from "./styled";

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"




export default function Sucesso() {
    return <>
        <HeaderMenu />
            <BodySection>
               <h1>Obrigado!</h1>
               <p>Seu pedido foi realizado com sucesso!</p>
            </BodySection>   
        <Footer />
    </>
}