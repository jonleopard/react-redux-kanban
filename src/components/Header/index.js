import React from 'react';
import { Box, Heading, Text, Divider } from 'rebass';

const Header = () => {
  return (
    <Box w={1} mt={1} py={2}>
      <Heading children="Dashboard" />
      <Text children="../Dates" pt={3} />
      <Divider size={1} />
    </Box>
  );
};

export default Header;
