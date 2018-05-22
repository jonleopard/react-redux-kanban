import React from 'react';
import { MoreHorizontal } from 'react-feather';
import { Flex } from 'rebass';

const ColumnOptions = () => {
  return (
    <Flex justifyContent="flex-end">
      <MoreHorizontal color="gray" />
    </Flex>
  );
};

export default ColumnOptions;
