import styled from "styled-components"

export const BodyStyled = styled.body `
display: flex;
flex-direction: column;
background-color: #EFF2F6;
min-height: 100vh;
`

export const MainStyled = styled.header `
margin-top: 60px;
flex: 1 1 0;
display: flex;
justify-content: center;
`

export const FormStyled = styled.form `
margin-top: 10vh;
padding: 20px;
background-color: #FFFFFF;
max-height: 260px;
width: 35vh;
display: flex;
gap: 10px;
flex-direction: column;

h1 {
    padding-bottom: 5px;
}

p {
    opacity: 60%;
}

input {
    padding: 10px;
}

input.remember {
    text-decoration: none;
}

label {
    font-size: 15px;
    margin-left: 5px;
    opacity: 60%;
}

div.error {
    justify-content: center;
    position: relative;
    top: 20px;
    color: #ff0000;
}

div {
    display: flex;
}

a.forgetPass {
    text-decoration: none;
    color: #000000;
    font-size: 15px;
    opacity: 60%;
    text-align: end;
    position: relative;
    bottom : 28px; 

    &:hover {
        opacity: 100%;
        transition: 1s;
    }
}

button {
    font-size: 18px;
    cursor: pointer;
    background: none;
    border: none;

    &:hover {
        transition: 0.8s;
        opacity: 50%;
    }
}

a.posicao {
    opacity: 60%;
    text-align: center;
    margin-top: 35px;
    text-decoration: none;
    color: #000000;
    cursor: pointer;

    &:hover {
        opacity: 100%;
        transition: 1s;
    }
}
`