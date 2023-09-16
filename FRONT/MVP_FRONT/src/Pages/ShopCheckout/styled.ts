import styled from "styled-components"

export const Line = styled.div`
    width: 100%; // Ocupar toda a largura
    max-width: 475px; // Largura máxima de 469px
    height: 2px;
    background-color: black;
    margin: 16px;

    @media (max-width: 475px) {
        width: 100%; // Quando a tela for menor ou igual a 469px, a largura ocupará 100% da tela
    }
`

export const BodySectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
`

export const BodySectionOne = styled.section`
    flex: 1;
    margin-left: 75px;
    max-width: 48%; 
    padding: 50px;

    h1 {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 15px;
    }

    p {
        font-size: 18px;
    }

    a.shopLink {
        color: black;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none; 
        position: relative;
        
        &::after {
            content: '';
            width: 0%;
            height: 2px;
            background-color: #FFA500;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.6s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
    }

    div.boxOne,
    div.boxTwo {
        margin: 5%;
    }

    h1.pedidos {
        font-weight: bold;
        font-size: 18px;
        margin-top: 20px; // Ajuste para a margem superior
    }
`

export const BodySectionTwo = styled.section`
    flex: 1; 
    margin-left: 75px;
    max-width: 48%; // Defina a largura máxima para 48% para que as seções fiquem uma ao lado da outra
    padding: 50px;

    h1 {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 15px;
    }
`

export const ButtonCheckout = styled.button`
    border: 2px solid #000000;
    background-color: #ffffff;
    color: #000000;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 20px; // Ajuste para o espaçamento horizontal
    width: auto; // Largura automática para se ajustar ao conteúdo
    cursor: pointer;
    margin-top: 20px; // Ajuste para a margem superior
    margin-left: 0; // Remova a margem esquerda

    &:hover {
        color: #ffa500;
        transition: 0.9s;
    }
`
