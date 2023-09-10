import styled from 'styled-components';

export const HorizontalProductWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 7px;
  position: relative;
  width: 560px;
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
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 7px;
  padding: 6px 5px;
  position: relative;
`;

export const Title = styled.div`
  color: #000000;
  font-size: 25px;
  font-weight: bold;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export const TextWrapper = styled.div`
  color: #000000;
  position: relative;
  width: 357px;
`;

export const Price = styled.div`
  color: #000000;
  font-size: 25px;
  position: relative;
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