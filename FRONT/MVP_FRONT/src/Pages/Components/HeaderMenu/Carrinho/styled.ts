import styled from "styled-components";

export const CarrinhoStyled = styled.body `
background-color: #FFFF;
min-width: 300px;
min-height: 500px;
display: flex;
justify-content: center;
position: absolute;

main {
    padding-top: 2vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;

    a.fecha {
        display: flex;
        justify-content: center;
        color: black;

        &:hover {
            transition: 0.3s;
            color: bisque;
        }
    }
}

`
