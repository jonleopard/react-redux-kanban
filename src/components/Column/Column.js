import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';

export const StyledColumn = styled(Box)`
  width: 300px;
  border-right: 1px dashed #cfd7df;
`;

const Column = () => {
  return (
    <Flex>
      <StyledColumn p={2}>
        <Card />
        <AddCard />
      </StyledColumn>
    </Flex>
  );
};

export default Column;
