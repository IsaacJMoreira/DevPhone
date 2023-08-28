import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import inicio from "../../img/inicio.jpg"
import cnbc from "../../img/cnbc.png"
import forbes from "../../img/forbes.png"
import techadv from "../../img/techadv.png"
import tnw from "../../img/tnw.png"

//Styleds:
import { MainStyled, FormStyled } from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { faEnvelope, faG } from '@fortawesome/free-solid-svg-icons';
import ButtonShop from '../Components/Buttons/ButtonShop';
import { CompaniesStyled } from './styled';


export default function Home() {
    return <>
        <HeaderMenu />
        <MainStyled>
            <FormStyled>
                <h1>A inovação em suas mãos!</h1>
                <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                <button>Shop All</button>
                <img src={inicio} />
            </FormStyled>
            <CompaniesStyled>
                <img src={cnbc} />
                <img src={forbes} />
                <img src={tnw} />
                <img src={techadv} />
            </CompaniesStyled>
        </MainStyled>
      
        <Footer />
    </>
}