import styled from "styled-components"
import THEME from "../../../../theme"

export const ButtonGlobal = styled.button `
border: ${THEME.COLORS.BLACK};
background-color: ${THEME.COLORS.BLACK};
color: ${THEME.COLORS.WHITE};
font-weight: bolder;
font-size: 18px;
padding: 13px;
width: 10vw;
height: 3.3vw;
min-height: 50px;
min-width: 120px;
cursor: pointer;

&:hover {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    transition: 0.9s;
}

`

export const ButtonShoparea = styled.button `
    
    width: 30px;
    height: 30px;
    
    border: none;
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
    
    

    a.seguinte {
        color: black;
        background: none;
    }
`

