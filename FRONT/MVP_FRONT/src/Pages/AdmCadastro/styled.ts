import { Link } from "react-router-dom";
import styled from "styled-components"

export const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhar os elementos à esquerda */
  justify-content: flex-start; /* Alinhar os elementos à esquerda */
  text-align: left; /* Alinhar o texto à esquerda */
  gap: 10px; /* Espaçamento vertical entre os elementos */
  margin-left: 147px;
  margin-top: 55px;

`
export const BackButton = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: #595959;
  padding: 1px; 
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block; 
  position: relative;

&::after {
  content: '';
  width: 0; 
  height: 2px;
  background-color: #FFA500; 
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.3s ease-in-out; 
}

&:hover::after {
  width: 100%; 
}
`;

// Estilo para todos os inputs
export const InputStyled = styled.input`
  width: 398px;
  height: 40px;
  margin-bottom: 10px; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 16px; 
`;


export const InputCategoriaStyled = styled(InputStyled)`
   width: 398px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &::after {
    content: '▼'; /* Carácter da seta para baixo */
    position: absolute;
    top: 50%; 
    right: 10px; 
    transform: translateY(-50%);
    font-size: 18px;
  }
`;


export const InputDescricaoStyled = styled.textarea`
  width: 398px;
  height: 125px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical; 
`;

export const CustomButton = styled.button`
  width: 397px;
  height: 50px;
  margin-left: 10px;
  border-radius: 6px;
  background-color: black;
  font-size: 20px;
  font-weight: 600;
  color: white; /* Cor do texto inicial (branco) */
  transition: color 0.3s ease; /* Adiciona uma transição suave para a cor do texto */

  &:hover {
    color: #FFA500; /* Cor do texto quando o mouse passa por cima (laranja) */
  }
`;
