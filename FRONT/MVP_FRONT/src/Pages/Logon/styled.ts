import styled from "styled-components"

export const BodyStyled = styled.body `
display: flex;
flex-direction: column;
background-color: #EFF2F6;
min-height: 98vh;
`

export const MainStyled = styled.header `
margin-top: 60px;
flex: 1 1 0;
display: flex;
justify-content: center;
`

export const FormStyled = styled.form `
margin-top: 3vh;
padding: 20px;
background-color: #FFFFFF;
height: 350px;
width: 35vh;
display: flex;
gap: 13px;
flex-direction: column;

p {
    opacity: 50%;
}

div.diverror {
    color: red;
    position: relative;
    top: 10px;
    text-align: center;
}

input {
    padding: 10px;
    font-size: 15px;
}

label {
    font-size: 15px;
    margin-left: 5px;
    opacity: 80%;
}

button {
    font-size: 17px;
    cursor: pointer;
    background: none;
    border: none;

    &:hover {
        transition: 0.8s;
        opacity: 50%;
    }
}

a.contajacriada {
    text-decoration: none;
    color: #000000;
    opacity: 60%;
    cursor: pointer;
    text-align: center;
    margin-top: 20px;

    &:hover {
        opacity: 100%;
        transition: 1s;
    }
}
`
