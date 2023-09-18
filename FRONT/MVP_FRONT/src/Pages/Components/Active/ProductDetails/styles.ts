import { styled } from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 100px;
`;

export const DivImg = styled.div`
  margin-right: 100px;
  margin-left: 50px;
`;

export const ProductImage = styled.img`
  max-width: 350px;
  max-height: 350px;
  width: 100%;
  height: auto;
`;

export const ProductDetailsSection = styled.section`
  padding-top: 20px;
  text-align: left;

  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    text-align: left;
    font-weight: 400;
    font-size: 20px;
    max-width: 620px;
    max-height: 90px;
    margin-bottom: 30px;
  }
`;

export const DivGroupBut = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding-top: 20px;
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

export const Price = styled.h2`
  font-size: 40px;
  font-weight: 300;
  padding-top: 20px;
`;



