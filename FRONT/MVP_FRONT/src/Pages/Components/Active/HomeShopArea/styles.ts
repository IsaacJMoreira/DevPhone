import { styled } from "styled-components";



export const DivStyled = styled.div`


a.seguinte{
    color: black;
    text-decoration: none;
    margin-left: 10px;
    padding: 5px;
    font-weight: bold;
    font-size: 17px;
    
    &:hover{
        background-color: #C0C0C0;
    }
}
`

export const CardProd = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    margin: 25px;
    max-width: auto;  
    color: #000000;

    @media (max-width: 768px) {
    .CardProd {
        flex-direction: column; /* Stack items vertically on smaller screens */
    }
    }

`