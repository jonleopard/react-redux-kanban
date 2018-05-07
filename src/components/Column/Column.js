import styled from 'styled-components';
import { Box } from 'rebass';

const Column = styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eff1f5;
  border-radius: 4px;
  border: 1px solid #ebedef;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

export default Column;
