import { Link } from "react-router-dom"
import HeaderMenu from "../Components/HeaderMenu"

import {
     BodySection,
     SectionStyled,
     } from "./styled"

export default function AdmCadastro() {


    return <BodySection>
        <HeaderMenu/>
        <main>
            <SectionStyled onClick={() => document.querySelector(".input-field")}>
                <div className="cadastro">
              <Link to='/PainelAdm' className="backButton"><span>&lt;</span> Voltar</Link>
              <h1>Cadastro de Produtos</h1>
                </div>
                <div className="form">
              <input type="text" placeholder="Nome do Produto" />
              <input type="text" placeholder="Preço" />
              <div className="foto">
                <input type="file" accept="image/*"/>
              </div>
              <input type="text" placeholder="Categoria" />
              <input placeholder="Descrição" />
              <button>Salvar</button>
              </div>
            </SectionStyled>
        </main>
        </BodySection>    
}