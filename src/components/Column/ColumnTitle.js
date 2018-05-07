import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

const ColumnTitle = styled(Textarea)`
  background: transparent;
  border: none;
  font-weight: 800;
  font-size: 18px
  resize: none;
  outline: 0px none transparent;
  margin-bottom: 14px;
`;

export default ColumnTitle;
