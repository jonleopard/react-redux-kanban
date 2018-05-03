import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { PlusCircle } from 'react-feather';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';

const StyledColumn = styled(Box)`
  max-width: 300px;
  border-right: 1px dashed #cfd7df;
`;

const StyledAddColumn = styled(StyledColumn)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cfd7df;
  transition: 150ms ease;

  &:hover {
    color: #8898aa;
    transition: 150ms ease;
  }
`;

const ColumnContainer = () => {
  return (
    <Flex>
      <StyledColumn w={1} p={2}>
        <Card />
        <AddCard />
      </StyledColumn>
      <StyledAddColumn w={1} p={2}>
        <PlusCircle size={50} />
      </StyledAddColumn>
    </Flex>
  );
};

export default ColumnContainer;
