
import { styled } from "styled-components";
import THEME from "../../../../theme";
// 🔮 Translated to TypeScript by ChatGPT 🚀
// 📅 Date: 2023-08-27



export const RadioButtonWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content: flex-end;
gap: 10px;


width: 200px;
margin: 10px;

.react-switch-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
}

.react-switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: grey;
  border-radius: 25px;
  position: relative;
  transition: background-color .2s;
}

.react-switch-label .react-switch-button {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  border-radius: 25px;
  transition: 0.2s;
  background: black;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
  left: calc(99%);
  transform: translateX(-101%);  
  background: ${THEME.COLORS.WHITE}
}

.react-switch-label:active .react-switch-button {
  width: 50px;
  ;
}

.react-switch-checkbox:checked + .react-switch-label {
  background: ${THEME.COLORS.ORANGE_HIGHLIGHT} ;
}


`;


