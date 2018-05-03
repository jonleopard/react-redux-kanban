import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Plus } from 'react-feather';

const StyledCard = styled.div`
  background-color: white;
  height: auto;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  transition: box-shadow 150ms ease;

  &:hover {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }
`;

const CenterIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const AddCard = () => {
  return (
    <div>
      <Box mb={1}>
        <StyledCard>
          <CenterIcon>
            <Plus />
          </CenterIcon>
        </StyledCard>
      </Box>
    </div>
  );
};

export default AddCard;
