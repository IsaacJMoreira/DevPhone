import styled from "styled-components"

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
    margin: 16px;
`

export const BodySectionsContainer = styled.div`
    display: flex;
    flex-direction: column; 

    @media (min-width: 768px) { 
        flex-direction: row;
    }
`

export const BodySectionOne = styled.section`
    flex: 1;
    padding: 5%;
    margin-left: 2%;

    h1 {
        font-weight: bold;
        font-size: 30px;
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
        margin-top: 15%;
    }
`

export const BodySectionTwo = styled.section`
    flex: 1;
    padding: 5%;
    margin-left: 10%;
    margin-top: 1%;

    h1 {
        font-weight: bold;
        font-size: 18px;
    }
`

export const InputCoupon = styled.input`
    width: 75%;
    padding: 10px;
    font-size: 16px;
    color: black;
    border: 2px solid #FFA500;
    border-radius: 6px;

    &::placeholder {
        color: #999;
    }

    &:focus {
        background-color: #fff;
    }
`;

export const ButtonShopCheckout = styled.button`
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
