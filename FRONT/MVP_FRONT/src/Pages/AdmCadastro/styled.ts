import styled from "styled-components"
import THEME from "../../theme"

export const BodySection = styled.section`
display: flex;
flex-direction: column;
background-color: #EFF2F6;
min-height: 98vh;


main {
  margin-top: 60px;
  display: flex;
  flex: 1 1 0;
  justify-content: center;
}
`
export const SectionStyled = styled.section `
display: flex;
gap: 5px;
display: flex;
flex-direction: column;
margin-right: 73vh;


div.cadastro {
  display: flex;
  flex-direction: column;
  gap: 4px;

a.backButton {
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
width: 20%; 
}}

}

div.form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;


input {

  margin-bottom: 10px; 
  padding: 15px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  font-size: 16px; 
}



div.foto {
  background-color: ${THEME.COLORS.WHITE};
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px dashed #0000FF;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;



  input {
    cursor: pointer;
    border: none;
    height: 100px;
    background-color: ${THEME.COLORS.WHITE};
    color: ${THEME.COLORS.BLACK};
  }
}


button {
  width: 397px;
  height: 50px;
  border-radius: 6px;
  background-color: black;
  font-size: 20px;
  font-weight: bold;
  color: white; /* Cor do texto inicial (branco) */
  transition: color 0.3s ease; /* Adiciona uma transição suave para a cor do texto */

  &:hover {
    color: #FFA500; /* Cor do texto quando o mouse passa por cima (laranja) */
  }
}
}
`
