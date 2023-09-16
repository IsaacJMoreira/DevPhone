import { styled } from "styled-components";
import THEME from "../../../../theme";

export const OrderDiv = styled.div`

  height: 100vh;
  .ordersCard{
    max-width: 40vw;
    height: 75vh;
    margin: 0;
  }
 
  .orderCard,
  .title {
    
    height: max-content;
    min-height: fit-content;
    background-color: ${THEME.COLORS.WHITE};
    padding: 15px 10px 0 10px;
    margin: 0;
  }

  
  .title {
    background-color: ${THEME.COLORS.WHITE};
    color: ${THEME.COLORS.BLACK};
    font-weight: bolder;
    font-size: larger;
  }

  
  .addressButtonUpdate,
  .addressButtonDelete {
    background-color: ${THEME.COLORS.WHITE};
    color: ${THEME.COLORS.BLACK};
    font-size: 100%;
    border: 1px solid ${THEME.COLORS.BLACK};
    width: 100%;
    margin-bottom: 10px;
  }
  
  .addressButtonUpdate:hover,
  .addressButtonDelete:hover {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    border: 1px solid ${THEME.COLORS.ORANGE_HIGHLIGHT};
    transition: 0.9s;
  }

  label {
    color: ${THEME.COLORS.BLACK};
    font-size: larg;
    font-weight: bolder;
  }

  .line {
    margin: 10px 0;
    border-bottom: 1px solid ${THEME.COLORS.GREY};
  }

`;
