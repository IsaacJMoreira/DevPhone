import { BodySection } from "./styled";

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"

export default function ShopCheckout() {
    return <>
        <HeaderMenu />
            <BodySection>
                <div>
                    <h1>{"Pagamento"}</h1>
                </div>
            </BodySection>   
        <Footer />
    </>
}