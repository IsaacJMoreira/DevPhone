import { styled } from "styled-components";
import { CardContainer } from "../../Containers/cardContainer/styles";



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

export const CustomCardContainer = styled(CardContainer)`
  padding-top: 80px;

`;