import { Link } from "react-router-dom"
import HeaderMenu from "../Components/HeaderMenu"

import { BodySection, SectionStyled } from "./styled"
import { useState } from "react"
import { ButtonGlobal } from "../Components/Buttons/ButtonGlobal";

type types = {
  setImage: FileList
};

export default function AdmDetails() {


  return <BodySection>
    <HeaderMenu />
    <main>
      <SectionStyled onClick={() => document.querySelector(".input-field")}>
        <div className="cadastro">
          <Link to='/PainelAdm' className="backButton"><span>&lt;</span> Voltar</Link>
          <h1>Detalhe do Produto</h1>
        </div>
        <div className="form">
          <input type="text" placeholder="Nome do Produto" />
          <input type="text" placeholder="Preço" />
          <div className="foto">
            <input type="file" accept="image/*" />
          </div>
          <input type="text" placeholder="Categoria" />
          <input placeholder="Descrição" />
          <div className="salvarButton">
            <ButtonGlobal className="custom-button">Salvar</ButtonGlobal>
          </div>
          <div>
            <button className="excluir-button">Excluir definitivamente</button>
          </div>
        </div>
      </SectionStyled>
    </main>
  </BodySection>
}