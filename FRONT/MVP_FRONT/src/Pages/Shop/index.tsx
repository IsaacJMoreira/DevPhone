

import { ShopArea } from "../Components/Active/ShopArea";
import { BodySection } from "./styled";
import {useState} from "react"

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"



export default function Shop() {

    const  [searchInput, setSearchImput] = useState("");


  

    return <>
        <HeaderMenu
            input={searchInput}
            searchHandler={(e)=>setSearchImput(e.target.value)}
            searchDisabled = {false}
        />
        <h1>{searchInput}</h1>
        <BodySection>

            <ShopArea />

        </BodySection>
        <Footer />
    </>
}