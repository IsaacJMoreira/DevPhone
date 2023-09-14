import { Link } from "react-router-dom"

//styleds: 
import { BodyStyled, MainStyled, SectionStyled } from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"


export default function AdmHome({}) {

    return <BodyStyled>
        <HeaderMenu/>
         <MainStyled>
            <SectionStyled>
            <div className="divh1">
                <h1>Painel Administrativo</h1>
                <p>Bem vindo, admin!</p>
            </div>
            <div className="divSelectAdm">
                <button>Produtos</button>
                <button className="buttonWhite">Usuários</button>
                <button className="buttonWhite">Pedidos</button>
            </div>
            <Link to="/admCadastro" className="adiconarNovo">Adicionar novo</Link>
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr className="crud">
                    <td>i5 10120, foda</td>
                    <td>Computador</td>
                    <td>R$100</td>
                    <td>
                        <button><Link to="/admDetails" className='admDetails' >ver detalhes</Link></button>
                        <button>excluir</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </SectionStyled>
         </MainStyled>
        <Footer/>
    </BodyStyled>
}
