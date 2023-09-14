import { styled } from "styled-components";




export const DivStyled = styled.div `
margin-bottom: 10px;
button {
    width: 30px;
    height: 30px;
    border: none;
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
        transition: 0.8s;
        width: 40px;
        height: 40px;
    }
}

a.seguinte{
    color: black;
    text-decoration: none;
    margin-left: 10px;
    padding: 5px;
    font-weight: bold;
    font-size: 17px;
    
    &:hover{
        transition: 0.8s;
        border-radius: 10px;
        background-color: #C0C0C0;
    }
}
`