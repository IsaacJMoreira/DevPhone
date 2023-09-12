import { BodySectionsContainer,
         BodySectionOne,
         BodySectionTwo,
         InputCoupon,
         Line, 
         ButtonShopCheckout} from "./styled";
import { Link } from "react-router-dom";

import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";
import PolicyBox from "../Components/PolicyBox";
import PriceSummary from "../Components/PriceSummary";
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
                    <h1>{"Seu Carrinho"}</h1>
                    <p>Não está pronto para finalizar a compra?</p>
                    <Link to="/Shop" className="shopLink">Continue comprando!</Link>
                    <div className="boxOne"><HorizontalProduct productName={"Moto G"} categoria={"Family G"} quantidade={10} preco={"R$1000"} imageUrl={MotoG}></HorizontalProduct></div>
                    <Line />
                    <div className="boxTwo"><HorizontalProduct productName={"Moto E"} categoria={"Family E"} quantidade={100} preco={"R$500,00"} imageUrl={MotoE}></HorizontalProduct></div>
                    <h1 className="pedidos">Informações do Pedido</h1>
                    <Line />
                    <PolicyBox headerText={"Política de Devolução"} expandedText={"Nossas políticas de devolução estão disponíveis aqui."}></PolicyBox>
                    <PolicyBox headerText={"Opções de Frete"} expandedText={"Veja as opções de envio do frete aqui."}></PolicyBox>
                    <PolicyBox headerText={"Política do Frete"} expandedText={"Nossas políticas de frete estão disponíveis aqui."}></PolicyBox>
                </div>
            </BodySectionOne>
            <BodySectionTwo>
                <div>
                    <h1>Resumo do Pedido</h1>
                    <InputCoupon type="text" placeholder="Coloque seu cupom aqui" />
                    <PriceSummary />
                    <Link to="/shopCheckout">
                    <ButtonShopCheckout>Finalizar Compras</ButtonShopCheckout></Link>
                </div>
            </BodySectionTwo> 
            </BodySectionsContainer>  
        <Footer />
    </>
}