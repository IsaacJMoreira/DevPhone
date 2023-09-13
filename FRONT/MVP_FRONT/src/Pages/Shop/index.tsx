

import { ShopArea } from "../Components/Active/ShopArea";
import { BodySection } from "./styled";
import {useState} from "react"

import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"



export default function Shop() {

    const  [searchInput, setSearchInput] = useState("");


  

    return <>
        <HeaderMenu
            input={searchInput}
            searchHandler={(e)=>setSearchInput(e.target.value)}
            searchDisabled = {false}
        />
        <BodySection>

            <ShopArea
                searchTerm={searchInput}
                categoriesList={[]}
            />

        </BodySection>
        <Footer />
    </>
}