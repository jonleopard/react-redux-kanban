import React from 'react';
import { Box, Heading, Divider } from 'rebass';

const Header = () => {
  return (
    <Box w={1} mt={1}>
      <Heading children="Dashboard" />
      <Divider w={1} color="#cfd7df" />
    </Box>
  );
};

export default Header;
