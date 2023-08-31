import styled from 'styled-components';
import THEME from '../../../../theme';

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 15vw;
    min-width: 200px;
    background-color: ${ THEME.COLORS.WHITE };      
    
    
    gap: 15px;
    padding: 2vw;  
    border-width: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    border: none;
    margin: 5px;

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
        width: 15vw;
        height: 15vw;
        border-radius: 5px; 
        min-width: 200px;
        min-height: 200px;
    }

    .button:hover{
     background-color: #9CCE76;
     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
     }

`;


