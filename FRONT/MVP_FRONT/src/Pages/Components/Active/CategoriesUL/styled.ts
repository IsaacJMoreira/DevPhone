
import { styled } from "styled-components";
import THEME from "../../../../theme";
// 🔮 Translated to TypeScript by ChatGPT 🚀
// 📅 Date: 2023-08-27



export const RadioButtonWrapper = styled.div`
display:flex;
justify-content: center;
gap: 10px;
font-size: 25px;
border-bottom: 1px solid black;
background-color: #F8F8FF;
padding-top: 10px;
padding-bottom: 10px;




.react-switch-checkbox {
  visibility: hidden;
}

.react-switch-label {
  margin-top: 3px;
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
}

.react-switch-checkbox:checked + .react-switch-label {
  background: ${THEME.COLORS.ORANGE_HIGHLIGHT};
}

`


