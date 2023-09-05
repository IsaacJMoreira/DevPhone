import { BodySection } from "./styled";

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { ButtonGlobal } from "../Components/Buttons/ButtonGlobal";
import { HorizontalProduct } from "../Components/HorizontalProductCard";
import MotoG from "../../img/moto G antigo.jpg"
import MotoE from "../../img/Moto E antigo.png"


export default function ShopCart() {
    return <>
        <HeaderMenu />
            <BodySection>
                <div>
                    <h1>{"Seu Carrinho"}</h1>
                    <p>Não está pronto para finalizar a compra? Continue comprando!</p>
                    
                    <HorizontalProduct productName={"Moto G"} size={""} quantity={10} price={"R$1000"} imageUrl={MotoG}></HorizontalProduct>
                    <HorizontalProduct productName={"Moto E"} size={""} quantity={100} price={"R$500,00"} imageUrl={MotoE}></HorizontalProduct>

                    <ButtonGlobal>Continuar a finalizar a compra</ButtonGlobal>
                </div>
            </BodySection>   
        <Footer />
    </>
}