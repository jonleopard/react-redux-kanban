import styled from 'styled-components';
import { Box } from 'rebass';

const AddColumn = styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #cfd7df;
  transition: 150ms ease;

  &:hover {
    color: #8898aa;
    transition: 150ms ease;
    background-color: transparent;
  }
`;

export default AddColumn;
