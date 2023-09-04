import { BodySection } from "./styled";

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { ButtonGlobal } from "../Components/Buttons/ButtonGlobal";
import RemoveButton from "../Components/Buttons/RemoveButton";
import ShadowBox from "../Components/ShadowBox";
import MotoG from "../../img/moto G antigo.jpg"

export default function ShopCart() {
    return <>
        <HeaderMenu />
            <BodySection>
                <div>
                    <h1>{"Seu Carrinho"}</h1>
                    <p>Não está pronto para finalizar a compra? Continue comprando!</p>
                    
                    <ShadowBox imageSrc={MotoG} title={"Moto G"} value={"R$ 1000"}></ShadowBox>
                    <RemoveButton onClick={function (): void {
                    throw new Error("Function not implemented.");
                     } }></RemoveButton>

                    <ButtonGlobal>Continuar a finalizar a compra</ButtonGlobal>
                </div>
            </BodySection>   
        <Footer />
    </>
}