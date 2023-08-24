import styled from 'styled-components';
import THEME from '../../../theme';

export const CardContainer = styled.section`
    /* background-image: linear-gradient(90deg,${THEME.COLORS.WHITE},${THEME.COLORS.LIGHT_BLUE}, ${THEME.COLORS.YELLOW_LIGHT}, ${THEME.COLORS.GREEN}); */
    background-color: ${THEME.COLORS.WHITE};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    box-sizing : border-box;
    background-color: transparent;      
    justify-content: space-evenly;
    gap: 5px;    
    text-align: center;
    margin: none;    
`;


