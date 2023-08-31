import styled from "styled-components"

export const FooterStyled = styled.footer `
background-color: #FFFFFF;
display: flex;
gap: 13vh;
justify-content: center;
width: 100%;
padding-bottom: 10px;
padding-top: 20px;
position: relative;


div{
    gap: 10px;
}

h1 {
    margin-bottom: 15px;
    font-size: 40px;
}

p {
   max-width: 420px;
   margin-bottom: 20px;
   font-weight: bolder;
}

a.singup {
    position: relative;
    bottom: 30px;
    left: 5px;
    text-decoration: none;
    color: #000000;
    padding-right: 5px;
    border-right: 1px solid #000000;

    &:hover {
        color: #FFA500;
        transition: 0.4s;
    }
}

input {
    padding: 10px;
    width: 400px;
    outline: #000000;
    padding-left: 70px;
}

button {
    background-color: #FFFFFF;
    border: none;
    padding: 11px;
    color: #000000;
    position: relative;
    right: 80px;
    font-weight: bolder;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        color: #FFA500;
        transition: 0.4s;
    }
}

h2 {
    margin-bottom: 20px;
}

li {
    list-style: none;
    opacity: 70%;
    margin-bottom: 7px;
}

`