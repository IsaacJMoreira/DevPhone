import styled from 'styled-components';

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 15vw;
    
    background-color: #F8F8FF;      
    
    gap: 10px;
    padding: 0.7vw;  
    border-radius: 5px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
    border: none;
    margin: 5px;
    margin-bottom: 40px;
    min-width: 200px;
    min-height: 200px;

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
        
        min-width: 200px;
        min-height: 200px;
    }

    .button:hover{
     background-color: #9CCE76;
     box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
     }

`;


