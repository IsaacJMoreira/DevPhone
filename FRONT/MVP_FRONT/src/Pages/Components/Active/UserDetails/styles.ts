import { styled } from "styled-components";
import THEME from "../../../../theme";

export const UserDiv = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;

  .userCard {
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    gap: 0px;
    background-color: ${THEME.COLORS.BLACK};
    color: ${THEME.COLORS.WHITE};
    width: 20vw;
    padding: 10px;
    max-height: 100%;
    margin: 0;
  }
  .userName,
  .personalInfo,
  .addressCard,
  .title {
    width: 90%;
    height: max-content;
    min-height: fit-content;
    margin: 5px 0;
    background-color: ${THEME.COLORS.GREY};
    padding: 15px 10px 0 10px;
  }

  .userName,
  .title {
    background-color: ${THEME.COLORS.BLACK};
    font-weight: bolder;
    font-size: larger;
  }

  .userButtonUpdate,
  .addressButtonUpdate,
  .addressButtonDelete {
    background-color: ${THEME.COLORS.GREY};
    font-size: 100%;
    border: 1px solid ${THEME.COLORS.WHITE};
    width: 100%;
    margin-bottom: 10px;
  }
  .userButtonUpdate:hover, 
  .addressButtonUpdate:hover,
  .addressButtonDelete:hover {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    border: 1px solid ${THEME.COLORS.ORANGE_HIGHLIGHT};
    transition: 0.9s;
  }

  div {
    width: 100%;
  }

  .addressArea {
    width: 100%;
    background-color: transparent;
  }

  ::placeholder {
    color: ${THEME.COLORS.WHITE};
    font-weight: normal;
  }
  input {
    margin: 0 0 20px 0;
  }
  input[type="text"],
  input[type="email"] {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    border: none;
    border-color: none;
    background: none;
    background-color: none;
  }
  input[type="text"],
  input[type="email"]:focus {
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
    outline: none;
    box-shadow: none;
    border: none;
    border-color: none;
    background: none;
    background-color: none;
  }

  label {
    color: ${THEME.COLORS.WHITE};
    font-size: larg;
    font-weight: bolder;
  }
  .personalInfoLabel {
    font-size: larger;
  }
  .line {
    margin: 10px 0;
    border-bottom: 1px solid ${THEME.COLORS.WHITE};
  }
  .WARNING{
    color: ${THEME.COLORS.ORANGE_HIGHLIGHT};
  }
`;
