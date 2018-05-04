import React from 'react';
import { Box, Heading } from 'rebass';

const Header = () => {
  return (
    <Box w={1} mt={1} py={4}>
      <Heading children="Dashboard" />
    </Box>
  );
};

export default Header;
