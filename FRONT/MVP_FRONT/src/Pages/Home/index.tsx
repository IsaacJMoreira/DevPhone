import shop from "../../img/shopping.webp"
import painelAdm from "../../img/monitor-dashboard.png"
import iphoneIlustracao from "../../img/-747048218-removebg-preview.png"



//Styleds:
import { MainStyled, BodyStyled } from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"
import ButtonShop from '../Components/Buttons/ButtonShop';
import { Link } from "react-router-dom"

export default function Home() {

    return <BodyStyled>
        <HeaderMenu />
        <MainStyled>
          <div className="home">
            <h1>Our latest arrivals</h1>
            <p>Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</p>
            <ButtonShop />
          </div>
             <div className="ilustra">
              <div>
              <Link to=""><img src={iphoneIlustracao} alt="IphoneBlackLeft"></img></Link>
              <p>O DevPhone foi desenvolvido com o objetivo de proporcionar para nossos clientes uma plataforma segura e confiável para que vocês possam encontrar o produto que desejam. Na DevPhone, nós trabalhamos com os melhores produtos do mercado sempre seguindo as tendências do mundo digital, assim, trazendo para você nosso cliente 
               satisfação e confiança com nossa loja.</p>
              </div>
             </div>
          <section>
            <div>
             <Link to="/shop"><img src={shop} width={168} height={151} alt="Painel Adm"></img></Link>
             <p>Shop</p>
             </div>
            <div>
             <Link to="/painelAdm"><img  src={painelAdm} width={168} height={151} alt="null"></img></Link>
             <p>Painel administrativo</p>
             <p className="apenasAdms">( torne-se um administrador )</p></div>
          </section>
        </MainStyled>
        <Footer />
    </BodyStyled>
}