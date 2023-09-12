import { useState } from 'react';
import PropTypes from 'prop-types';

import { InfoBoxContainer, TextContainer, CheckboxButton, TopText, BottomText } from './styled';

interface InfoBoxProps {
  topText: string;
  bottomText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ topText, bottomText }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(false);
    setIsChecked(!isChecked);
  };

  return (
    <InfoBoxContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        border: isHovered ? '2px solid black' : isChecked ? '2px solid orange' : '2px solid transparent',
      }}
    >
      <CheckboxButton onClick={toggleCheckbox}>
        {isChecked ? <span>&#10003;</span> : null}
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
};

export default InfoBox;
