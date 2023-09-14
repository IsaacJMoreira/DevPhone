
import HeaderMenu from "../Components/HeaderMenu"
import {
     BodySection,
     BackButton,
     CustomButton,
     InputStyled,
     InputCategoriaStyled,
     InputDescricaoStyled,
     } from "./styled"

export default function AdmCadastro() {
    return <>
        <HeaderMenu />
            <BodySection>
            <BackButton to='/'><span>&lt;</span> Voltar</BackButton>
            <h1>Cadastro de Produtos</h1>
            <InputStyled className="inputProduto" type="text" placeholder="Nome do Produto" />
            <InputStyled className="inputPreco" type="text" placeholder="Preço" />
            <InputStyled className="inputFoto" type="text" placeholder="Foto" />
            <InputCategoriaStyled className="inputCategoria" type="text" placeholder="Categoria" />
            <InputDescricaoStyled className="inputDescricao" placeholder="Descrição" />
            <CustomButton>Salvar</CustomButton>
            </BodySection>
    </>    
}