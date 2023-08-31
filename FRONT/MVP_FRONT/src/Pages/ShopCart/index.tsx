import { BodySection } from "./styled";

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"

export default function CartShop() {
    return <>
        <HeaderMenu />
            <BodySection>
                <div>
                    <h1>{"Seu Carrinho"}</h1>
                </div>
            </BodySection>   
        <Footer />
    </>
}