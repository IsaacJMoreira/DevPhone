import styled from "styled-components"
import THEME from "../../../theme"

export const ButtonGlobal = styled.button `
border: ${THEME.COLORS.BLACK};
background-color: ${THEME.COLORS.BLACK};
color: ${THEME.COLORS.WHITE};
font-weight: bolder;
font-size: 18px;
padding: 13px;
width: 10vw;
min-width: 120px;
cursor: pointer;

&:hover {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    transition: 0.9s;
}
`
