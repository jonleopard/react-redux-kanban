import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import ColumnTitle from './ColumnTitle';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';

const StyledColumn = styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eff1f5;
  border-radius: 4px;
  border: 1px solid #ebedef;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

const Column = () => {
  return (
    <StyledColumn px={2} pt={2} pb={1} mr={4}>
      <ColumnTitle />
      <Card />
      <AddCard />
    </StyledColumn>
  );
};

export default Column;
