import styled from "styled-components";
import THEME from "../../../../theme";


export const MainStyled = styled.main `
color: ${THEME.COLORS.BLACK};
position: absolute;
padding: 10px;
text-align: center;
top: 6px;
padding-left: 20px;

li {
    cursor: pointer;
    opacity: 80%;

    &:hover {
        transition: 0.4s;
        opacity: 100%;
    }
}

a.menuPerfil {
    color: ${THEME.COLORS.BLACK};
    cursor: pointer;

    &:hover {
        transition: 0.4s;
        color: #FF4500;
    }
}
`