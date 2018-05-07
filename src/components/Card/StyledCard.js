import styled from 'styled-components';
import { Box } from 'rebass';

const StyledCard = styled(Box)`
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

export default StyledCard;
