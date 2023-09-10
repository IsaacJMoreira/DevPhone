import styled from "styled-components"




export const MainStyled = styled.header `
flex: 1 1 0;
display: flex;
justify-content: center;
align-items: center;
height: 40vh;

`


export const FormStyled = styled.form `
background-color: #FFFF;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
max-height: 70px;




h1{
align-items: center;
display: flex;
justify-content:center;
font-size: 60px;
font-weight: 900x;
size:56px;  
padding-bottom: 30px;

}

p{
text-align: center;
font-weight: 400;
font-size:20px;
max-width: 620px;
max-height: 90px; 
}
`
export const CardContainerHome = styled.section`
    background-color: #F8F8FF;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing : border-box;
    justify-content: space-evenly;
    text-align: center;

    width: 66vw; 
    height: 30vw;
    padding-top: 80px;;


    div{
        width: 100%;
    }
    h1{
        font-size: 55px;
        padding: 15px;
        text-decoration: none;
       
    }

    a.custom-link {
     text-decoration: none; 
     color: #000000;
    }
`;

