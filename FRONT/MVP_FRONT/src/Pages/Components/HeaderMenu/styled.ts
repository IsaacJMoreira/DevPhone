import styled from "styled-components"
import THEME from "../../../theme"

export const HeaderStyled = styled.header `
background-color: #000000;
color: #FFFAFA;
display: flex;
padding: 1em;
justify-content: center;
max-width: 100%;

h1 {
    margin-top: 10px;
}

ul {
    list-style: none;
    display: flex;
    font-family: Inter;
    gap: 50px;
    margin-left: 40px;
    font-size: 20px;
}

li {
    margin-top: 19px;
}

input {
    margin-top: 10px;
    height: 40px;
    font-size: large;
    color: #FFFAFA;
    background-color: #000000;
    border: none;
    width: 33vw;
    outline: #000000;
}

//classNames de "Links"
a.menu {
    color: #FFFAFA;
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.6s ease-in-out;
   }

   &:hover::after {
      width: 100%;
   }
}
a{
    text-decoration: none;
    color: ${THEME.COLORS.WHITE};
}

a.carinho {
    color: #FFFAFA;
    text-decoration: none;
}


a.login {
    color: #FFFAFA;
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

a.searchIcon {
    color: ${THEME.COLORS.WHITE};
    text-decoration: none;
    margin-right: none;
}

`

