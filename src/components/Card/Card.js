import React from 'react';
import StyledCard from './StyledCard';
import StyledInput from './StyledInput';

const Card = ({ cardData, ...props }) => {
  return (
    <StyledCard w={1} mb={2}>
      <StyledInput
        value={cardData.definition}
        placeholder="Edit me!"
        type="text"
      />
    </StyledCard>
  );
};
export default Card;
