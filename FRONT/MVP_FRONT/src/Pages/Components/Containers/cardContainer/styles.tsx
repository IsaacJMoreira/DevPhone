import styled from 'styled-components';
import THEME from '../../../../theme';

export const CardContainer = styled.section`
    background-color: ${THEME.COLORS.WHITE};
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing : border-box;
    justify-content: space-evenly;
    gap: 5px;    
    text-align: center;
    margin: 0; 
    width: 75vw; 
    max-width: 75%;
    height: 100%;
    overflow: auto;
    div{
        width: 100%;
    }
    h1{
        font-size: 55px;
        padding: 15px;
    }
`;


