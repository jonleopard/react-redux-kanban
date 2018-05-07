import React from 'react';
import StyledCard from './StyledCard';
import StyledInput from './StyledInput';


function Card({ placeholder, definition, ...props }) {
  return (
    <StyledCard w={1} mb={2}>
      <StyledInput
        placeholder={placeholder}
        value={definition}
        type="text"
      />
    </StyledCard>
  );
}

export default Card;
