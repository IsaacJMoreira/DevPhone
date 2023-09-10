import styled from 'styled-components';

export const HorizontalProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 7px;
  position: relative;
  width: 100%; 
  max-width: 560px; 
`;

export const ProductImage = styled.div`
  background-color: #c4c4c4;
  width: 129px;
  height: 133px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 6px 5px;
  flex-grow: 1; 
`;

export const Title = styled.div`
  color: #000000;
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
  width: fit-content;
`;

export const TextWrapper = styled.div`
  color: #000000;
  width: 100%; 
  max-width: 357px; 
`;

export const Price = styled.div`
  color: #000000;
  font-size: 25px;
  width: 81px;
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Public Sans-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 0;
`;
