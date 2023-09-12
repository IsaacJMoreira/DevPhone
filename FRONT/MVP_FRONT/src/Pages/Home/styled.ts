import styled from "styled-components"


export const BodyStyled = styled.body `
display: flex;
flex-direction: column;
background-color: #EFF2F6;
min-height: 98vh;
`

export const MainStyled = styled.header `
margin-top: 60px;
flex: 1 1 0;
justify-content: center;

div.home {
    justify-content: center;
    text-align: center;
    

    h1 {
        font-size: 60px;
    }

    p {
        
        font-size: 25px;
        margin-top: 15px;
        
    }
}

div.ilustra {
    padding: 20px;
    display: flex;
    margin-top: 7vh;
    justify-content: center;
    background-color: #4F4F4F;
    color: #FFFF;
    cursor: auto;
    box-shadow: 0 0 5px 0 rgba(10, 10, 10, 0.29);


    div {
        display: flex;
        cursor: auto;
    }

    img {
        cursor: auto;
        position: relative;
        left: 10vh;
    }

    p {
        margin-top: 10vh;
        max-width: 80vh;
        font-size: 25px;
        text-align: left;
        text-shadow: 0.1em 0.1em 0.05em #333;
        position: relative;
        right: 10vh;
    }
}


section {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 5vh;
    gap: 10vh;

    div {

        img {
    cursor: pointer;

    &:hover {
        transition: 0.6s;
        position: relative;
        bottom: 10px;
    }
    }

    p {
        font-size: large;
    }

    p.apenasAdms {
        margin-top: 2px;
        opacity: 60%;
        font-size: 16px;

        &:hover {
            transition: 0.5s;
            opacity: 90%;
        }
    }
    }
}
 
`


