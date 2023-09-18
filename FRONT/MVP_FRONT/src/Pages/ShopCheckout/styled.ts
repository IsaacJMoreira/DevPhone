import styled from "styled-components"

export const Line = styled.div`
    width: 100%; 
    max-width: 475px; 
    height: 2px;
    background-color: black;
    margin: 16px;

    @media (max-width: 475px) {
        width: 100%; 
    }
`

export const BodySectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between; 
`

export const BodySectionOne = styled.section`
    flex: 1;
    margin-left: 75px;
    max-width: 48%; 
    padding: 50px;

    h1 {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 15px;
    }

    p {
        font-size: 18px;
    }

    a.shopLink {
        color: black;
        font-size: 18px;
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

    div.boxOne,
    div.boxTwo {
        margin: 5%;
    }

    h1.pedidos {
        font-weight: bold;
        font-size: 18px;
        margin-top: 20px; 
    }
`

export const BodySectionTwo = styled.section`
    flex: 1; 
    margin-left: 75px;
    max-width: 48%;
    padding: 50px;

    h1 {
        font-weight: bold;
        font-size: 28px;
        margin-bottom: 15px;
    }
`

export const ButtonCheckout = styled.button`
border-color: #000000;
background-color: black;
color: white;
font-weight: bolder;
font-size: 18px;
padding: 10px 10px;
width: 194px;
cursor: pointer;
margin-top: 20px;
margin-left: 3%;

&:hover {
  color: #ffa500;
  transition: 0.9s;
}
`;
