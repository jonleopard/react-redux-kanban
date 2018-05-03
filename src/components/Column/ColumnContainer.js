import React from 'react';
import { Flex } from 'rebass';
import Column from './Column';
import AddColumn from './AddColumn';

const ColumnContainer = () => {
  return (
    <Flex>
      <Column />
      <AddColumn />
    </Flex>
  );
};

export default ColumnContainer;
