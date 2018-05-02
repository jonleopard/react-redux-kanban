import React from 'react';
import { Heading, Divider } from 'rebass';
import { Box } from 'grid-styled';

const Header = () => {
  return (
    <Box w={1} mt={1}>
      <Heading children="Welcome to" />
      <Divider w={1} color="black" />
    </Box>
  );
};

export default Header;
