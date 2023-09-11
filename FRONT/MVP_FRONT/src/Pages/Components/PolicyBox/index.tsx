import { useState } from 'react';
import {
  PolicyBoxContainer,
  PolicyBoxHeader,
  ToggleButton,
  ExpandedPolicyText,
} from './styled';

interface PolicyBoxProps {
  headerText: string; 
  expandedText: string; 
}

export default function PolicyBox({ headerText, expandedText }: PolicyBoxProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <PolicyBoxContainer className={expanded ? 'expanded' : ''}>
      <PolicyBoxHeader>
        {headerText}
        <ToggleButton onClick={toggleExpansion}>
          {expanded ? '-' : '+'}
        </ToggleButton>
      </PolicyBoxHeader>
      {expanded && <ExpandedPolicyText>{expandedText}</ExpandedPolicyText>}
    </PolicyBoxContainer>
  );
}

