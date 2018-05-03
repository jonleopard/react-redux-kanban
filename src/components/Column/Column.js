import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Card from '../Card/Card';

const StyledColumn = styled(Box)`
  background-color: gray;
  width: 300px;
  height: 600px;
`;

const Column = () => {
  return (
    <div>
      <StyledColumn mr={2} p={2}>
        <Card />
        <Card />
      </StyledColumn>
    </div>
  );
};

export default Column;
