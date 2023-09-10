import { styled } from "styled-components"
import THEME from "../../theme"

export const BodyStyled = styled.body `
display: flex;
flex-direction: column;
background-color: #EFF2F6;
min-height: 98vh;
`

export const MainStyled = styled.main `
margin-top: 60px;
flex: 1 1 0;
display: flex;
justify-content: center;
`

export const SectionStyled = styled.section `


div.divh1 {
    margin-bottom: 30px;
    h1 {
        margin-bottom: 10px;
    }
}

div.divSelectAdm {

 button.buttonWhite {
    color: ${THEME.COLORS.BLACK};
    background-color: ${THEME.COLORS.WHITE}; 
}
    
button {
    margin-right: 20px;
    background-color: ${THEME.COLORS.BLACK};
    color: ${THEME.COLORS.WHITE};
    font-weight: bolder;
    font-size: 16px;
    padding: 13px;
    margin-bottom: 30px;
    min-width: 200px;
    cursor: pointer;

    &:hover {
        color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
        transition: 0.9s;
    }}}

a.adiconarNovo {
border: ${THEME.COLORS.BLACK};
background-color: #C0C0C0;
color: ${THEME.COLORS.WHITE};
font-weight: bolder;
text-decoration: none;
font-size: 15px;
padding: 10px;
cursor: pointer;

    &:hover {
        transition: 0.9s;
        color: ${THEME.COLORS.BLACK};
    }}

table {
    margin-top: 20px;
    background-color: #A9A9A9;
    border: 1px solid ;
    width: 118vh;
    margin-bottom: 100px;

    thead {
        color: ${THEME.COLORS.WHITE};
    }

    th {
        padding: 13px;
    }

    tbody {
        background-color: ${THEME.COLORS.WHITE};
    }
    
    td {
        text-align: center;
        padding: 10px;
        
    }

    button {
            cursor: pointer;
            color: ${THEME.COLORS.WHITE};
            background-color: #C0C0C0;
            border: none;
            
            padding: 10px;
            margin: 10px;

            &:hover {
               transition: 0.8s;
               color: ${THEME.COLORS.BLACK};
                height: 50px;
            }
        }
}
`
