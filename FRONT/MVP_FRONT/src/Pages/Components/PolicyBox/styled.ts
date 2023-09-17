import styled from 'styled-components';

export const PolicyBoxContainer = styled.div`
  width: 100%;
  max-width: 540px;
  padding: 0px;
  margin: 10px;
  transition: height 0.3s;

  &.expanded {
    height: auto;
  }
`;

export const PolicyBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 5px 10px;
  font-weight: bold;
`;

export const ToggleButton = styled.span`
  cursor: pointer;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ExpandedPolicyText = styled.div`
  margin-top: 10px;
  font-weight: bold;
  display: none;

  ${PolicyBoxContainer}.expanded & {
    display: block;
    margin-left: 10px; 
  }
`;



