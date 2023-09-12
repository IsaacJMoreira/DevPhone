import styled from 'styled-components';

export const InfoBoxContainer = styled.div`
  width: 396px;
  height: auto; 
  background-color: #fff; 
  padding: 20px;
  display: flex;
  align-items: flex-start; 
  justify-content: flex-start; 
  flex-direction: row; 
  border: 2px solid transparent; 
  transition: border 0.3s ease; 
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
`;

export const CheckboxButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: transparent; 
  border: 2px solid #000; 
  margin-right: 20px; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease; 
`;

export const TopText = styled.div`
  font-size: 18px;
  font-weight: bold; 
`;

export const BottomText = styled.div`
  font-size: 16px;
  align-self: flex-start;
  margin-top: 8px; 
`;

