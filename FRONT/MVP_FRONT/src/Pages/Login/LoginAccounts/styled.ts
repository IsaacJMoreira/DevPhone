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
max-height: 250px;
width: 35vh;
display: flex;
gap: 10px;
flex-direction: column;

h1 {
    padding-bottom: 10px;
}

p {
    opacity: 60%;
    padding-bottom: 10px;
}

li {
    list-style: none;
    text-align: center;
    border: 1px solid #E1E4EB;
    border-radius: 5px;
    padding: 10px;
}

a.Link {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
}

p.posicao {
    text-align: center;
    margin-top: 50px;

    &:hover {
        opacity: 100%;
        transition: 1s;
    }
}

a.linkk {
    text-decoration: none;
    color: #000000;
    cursor: pointer;
}


`
