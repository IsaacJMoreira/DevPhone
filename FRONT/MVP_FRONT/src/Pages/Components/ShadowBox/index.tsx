import styled from 'styled-components';

const ShadowBoxWrapper = styled.div`
  display: flex;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  flex: 1;
  padding-right: 20px;
`;

interface ShadowBoxProps {
    imageSrc: string;
    title: string;
    value: string;
  }
  
export default function ShadowBox({ imageSrc, title, value }: ShadowBoxProps) {
    return (
      <ShadowBoxWrapper>
        <Content>
          <h2>{title}</h2>
          <p>{value}</p>
        </Content>
        <Image src={imageSrc} alt={title} />
      </ShadowBoxWrapper>
    );
  }
  
