import styled from "styled-components"

export const Line = styled.div`
    width: 560px;
    height: 2px;
    background-color: black;
    margin: 16px
    
`
export const BodySectionOne = styled.section`

    display: flex;
    justify-content: space-around;
    padding: 50px 0;
    
    h1{
        font-weight: bold;
        font-size: 45px;
        margin-bottom: 15px;
    }

    p{
        font-size: 25px;
    }

    a.shopLink{
        color: black;
        font-size: 25px;
        font-weight: bold;
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

    div.boxOne{
        margin: 5%;
    }

    div.boxTwo{
        margin: 5%;
    }

    h1.pedidos{
        font-weight: bold;
        font-size: 25px;
        margin-top: 20%;
    }
    
`
export const BodySectionTwo = styled.section`

`
