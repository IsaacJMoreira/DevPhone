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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 100px;
    margin-left: 200px;
    max-width: auto;  


    @media (max-width: 768px) {
    .CardProd {
        flex-direction: column; /* Stack items vertically on smaller screens */
    }
    }

`