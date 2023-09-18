import styled from "styled-components"

export const SectionStyled = styled.section `
display: flex;
align-items: flex-start;
border-bottom: 1px solid;
margin: 10px;
padding: 10px;
gap: 10px;


img {
    width: 100px;
    height: 100px;
   }

.conteudo-do-item {
   width: 150px;

   h3 {
    font-size: 20px;
   }

   p {
    font-size: 16px;
   }

   .descricao {
    font-size: 14px;
    width: 210px;
    
   }

   button.remover {
    background: none;
    font-size: 15px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    position: relative;

    &:hover {
        transition: 0.4s;
        color: red;
    }
  }
}

`