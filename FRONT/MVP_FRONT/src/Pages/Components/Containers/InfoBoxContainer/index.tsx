import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InfoBoxContainer, TextContainer, CheckboxButton, TopText, BottomText } from './styled';

interface InfoBoxProps {
  topText: string;
  bottomText: string;
  isSelected: boolean; // Adicione a propriedade isSelected
  onBoxClick: () => void; // Adicione a propriedade onBoxClick
}

const InfoBox: React.FC<InfoBoxProps> = ({ topText, bottomText, isSelected, onBoxClick }) => {
  const handleBoxClick = () => {
    if (!isSelected) {
      // Chame a função de clique apenas se não estiver selecionado
      onBoxClick();
    }
  };

  return (
    <InfoBoxContainer
      onClick={handleBoxClick}
      style={{
        border: isSelected ? '2px solid orange' : '2px solid transparent',
      }}
    >
      <CheckboxButton>
        {isSelected ? <span>&#10003;</span> : null}
      </CheckboxButton>
      <TextContainer>
        <TopText>{topText}</TopText>
        <BottomText>{bottomText}</BottomText>
      </TextContainer>
    </InfoBoxContainer>
  );
};

InfoBox.propTypes = {
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onBoxClick: PropTypes.func.isRequired,
};

export default InfoBox;
