import React from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import { Flex, Box } from 'rebass';

const StyledCard = styled.div`
  display: flex;
  background-color: white;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;

  &:hover {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }
`;

const Input = styled(Textarea)`
  width: 100%;
  border: none;
  border-radius: 3px;
  resize: none;
  outline:0px none transparent;
`;

const Card = () => {
  return (
    <Flex>
      <Box w={1} mb={1}>
        <StyledCard>
          <Input placeholder="Hello! I'm a word definition, edit me!" type="text" />
        </StyledCard>
      </Box>
    </Flex>
  );
};

export default Card;
