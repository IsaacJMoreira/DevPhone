

import { ShopArea } from "../Components/Active/ShopArea";
import { BodySection } from "./styled";

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"



export default function Shop() {
    return <>
        <HeaderMenu />
        <BodySection>

            <ShopArea />

        </BodySection>
        <Footer />
    </>
}