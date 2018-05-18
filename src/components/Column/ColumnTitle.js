import React from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';

const StyledColumnTitle = styled(Textarea)`
  background: transparent;
  border: none;
  font-weight: 800;
  font-size: 18px
  resize: none;
  outline: 0px none transparent;
  margin-bottom: 14px;
`;

const ColumnTitle = ({ title, ...props }) => {
  return (
    <StyledColumnTitle value={title} placeholder="Column Title" type="text" />
  );
};

export default ColumnTitle;
