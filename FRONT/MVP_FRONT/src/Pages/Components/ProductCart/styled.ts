import styled from "styled-components";
import { Card } from "../Containers/Card/styles";

export const ProductContainer = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.img`
  height: 90px;
  width: 80px;
  margin-right: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  color: #777;
`;

export const ProductPrice = styled.h6`
  font-weight: bold;
  color: #333;
`;