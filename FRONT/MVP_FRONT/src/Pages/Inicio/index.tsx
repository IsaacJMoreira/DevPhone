import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import inicio from "../../img/inicio.jpg"

//Styleds:
import { MainStyled, BodyStyled, FormStyled} from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import { faEnvelope, faG } from '@fortawesome/free-solid-svg-icons';
import ButtonShop from '../Components/ButtonShop';


export default function Inicio() {
    return <BodyStyled>
        <HeaderMenu/>
        <MainStyled>
            <FormStyled>                
                <h1>A inovação em suas mãos!</h1>
                <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
                <button>Shop All</button>
                <img src={inicio}  />                
            </FormStyled>
        </MainStyled>
        <Footer/>
    </BodyStyled>
}