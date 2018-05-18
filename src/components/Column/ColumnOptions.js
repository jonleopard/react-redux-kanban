import React from 'react';
import { MoreHorizontal } from 'react-feather';
import Select from 'react-select';
import { Flex } from 'rebass';

const ColumnOptions = () => {
  return (
    <Flex justifyContent="flex-end" alignSelf="center">
      <MoreHorizontal color="gray">
        <Select />
      </MoreHorizontal>
    </Flex>
  );
};

export default ColumnOptions;
