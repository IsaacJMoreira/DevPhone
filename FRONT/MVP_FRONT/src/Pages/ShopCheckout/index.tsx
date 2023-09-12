import { BodySectionsContainer,
    BodySectionOne,
    BodySectionTwo,
    Line } from "./styled";
import { Link } from "react-router-dom";

import ProgressBar from "../Components/Containers/ProgressBarContainer";
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";
import InfoBox from "../Components/Containers/InfoBoxContainer";
import ButtonShop from "../Components/Buttons/ButtonShop";
import { HorizontalProduct } from "../Components/HorizontalProductCard";

// Importações de imagens
import MotoG from "../../img/moto G antigo.jpg";
import MotoE from "../../img/Moto E antigo.png";



export default function ShopCart() {
return <>
   <HeaderMenu />

       <BodySectionsContainer>
       <BodySectionOne>
           <div>
               <h1>{"Finalize suas Compras"}</h1>
               <ProgressBar></ProgressBar>
               <InfoBox topText={"Correios Comum"} bottomText={"7 a 10 dias úteis"}></InfoBox>
               <InfoBox topText={"Sedex"} bottomText={"3 a 5 dias úteis"}></InfoBox>
               <Link to="/comprarealizada">
               <ButtonShop />
               </Link>
            </div>    
       </BodySectionOne>
       <BodySectionTwo>
           <div>
               <h1>Sua lista de pedidos</h1>
               <div className="boxOne"><HorizontalProduct productName={"Moto G"} categoria={"Family G"} quantidade={10} preco={"R$1000"} imageUrl={MotoG}></HorizontalProduct></div>
               <Line />
               <div className="boxTwo"><HorizontalProduct productName={"Moto E"} categoria={"Family E"} quantidade={100} preco={"R$500,00"} imageUrl={MotoE}></HorizontalProduct></div>
               
           </div>
       </BodySectionTwo> 
       </BodySectionsContainer>  
   <Footer />
</>
}