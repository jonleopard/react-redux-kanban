import React from 'react';
import styled from 'styled-components';
import { PlusCircle } from 'react-feather';
import { Box } from 'rebass';

const StyledAddColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  color: #cfd7df;
  transition: 150ms ease;

  &: hover {
    color: #8898aa;
    transition: 150ms ease;
  }
`;

const AddColumn = () => {
  return (
    <StyledAddColumn>
      <PlusCircle size={50} />
      <p>Add Column</p>
    </StyledAddColumn>
  );
};

export default AddColumn;
