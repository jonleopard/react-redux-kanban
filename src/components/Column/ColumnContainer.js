import React from 'react';
import { Flex } from 'rebass';
import Column from './Column';

const ColumnContainer = () => {
  return (
    <Flex>
      <Column />
      <Column />
      <Column />
    </Flex>
  );
};

export default ColumnContainer;
