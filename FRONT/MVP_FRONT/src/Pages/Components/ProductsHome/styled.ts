import styled from 'styled-components';
import THEME from '../../../theme';




export const CardHome = styled.section`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 15vw;
    max-height: 450px;
    background-color: #F8F8FF;    
    
    
    gap: 100px;
    padding: 50px;  
    border-radius: 25px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    border: none;

    
    &:hover {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    transition: 0.5s;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.50);
    }


    p, h1, h2, h3, h4, h5, h6{
        box-sizing: border-box;
        text-align: center;
 
    }

    h6{
        font-size: 30px;
        margin: 10px;
    }

    img{
        object-fit: cover;
        width: 10vw;
        height: 10vw;
        border-radius: 5px; 
        
        min-width: 250px;
        min-height: 280px;

    }

`;


