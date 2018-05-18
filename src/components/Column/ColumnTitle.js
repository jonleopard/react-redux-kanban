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

const ColumnTitle = props => {
  return (
    <StyledColumnTitle
      value={props.title}
      placeholder="Column Title"
      type="text"
    />
  );
  //return <h1>{props.title}</h1>;
};

export default ColumnTitle;
