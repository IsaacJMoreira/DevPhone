import styled from 'styled-components';
import THEME from '../../../../theme';

export const CardContainer = styled.section`
    background-color: ${THEME.COLORS.WHITE};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing : border-box;
    background-color: transparent;      
    justify-content: space-evenly;
    gap: 5px;    
    text-align: center;
    margin: none; 
    width: 66vw; 
    height: 50vw;
    overflow: auto;
    div{
        width: 100%;
    }
    h1{
        font-size: 55px;
    }
`;


