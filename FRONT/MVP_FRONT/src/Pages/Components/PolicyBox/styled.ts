import styled from 'styled-components';

export const PolicyBoxContainer = styled.div`
  width: 540px;
  padding: 10px;
  margin: 20px;
  transition: height 0.3s;

  &.expanded {
    height: 100px; /* Altura maior quando expandida */
  }
`;

export const PolicyBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  font-weight: bold;
`;

export const ToggleButton = styled.span`
  cursor: pointer;
  font-size: 40px; /* Tamanho da fonte do sinal "+" */
`;

export const ExpandedPolicyText = styled.div`
  margin-top: 10px;
  font-weight: bold;
  display: none; /* Inicialmente escondido */

  /* Mostra quando expandido */
  ${PolicyBoxContainer}.expanded & {
    display: block;
  }
`;
