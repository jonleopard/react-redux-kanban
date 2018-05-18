import React from 'react';
import StyledCard from './StyledCard';
import StyledInput from './StyledInput';

function Card(props) {
  return (
    <StyledCard w={1} mb={2}>
      <StyledInput placeholder={props.cardData.definition} type="text" />
    </StyledCard>
  );
}

export default Card;
