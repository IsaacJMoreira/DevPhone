import { styled } from "styled-components";
import { ButtonGlobal } from "../../Buttons/ButtonGlobal";

export const ProductsSection = styled.section`
display: flex;
padding-bottom: 100px;


h1{
align-items: center;
display: flex;
justify-content:center;
font-size: 60px;
font-weight: 900x;
size:56px;  
padding-bottom: 30px;

}

h2{
align-items: center;
display: flex;
justify-content:center;
font-size: 40px;
font-weight: 300px;
padding-top: 20px;
}

p{
text-align: center;
font-weight: 400;
font-size:20px;
max-width: 620px;
max-height: 90px; 
}
`
export const DivGroupBut = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding-top: 50px;
`;


export const ProductDetailsSection = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 600px;
height: 600px;
padding-top: 200px;

& > ${ButtonGlobal} {
    margin-top: 20px; 
    margin-right: 10px;
  }



`

export const DivImg = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 147px;
padding-bottom: 50px;
padding-right: 80px;
padding-left: 350px;

`






