import React from 'react';
import styled from 'styled-components';
import { PlusCircle } from 'react-feather';
import { Button } from 'rebass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addColumn } from '../Column/actions';

const StyledAddColumn = styled(Button)`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #cfd7df;
  transition: 150ms ease;
  background: none;

  &:hover {
    color: #8898aa;
    transition: 150ms ease;
    background-color: transparent;
  }
`;

const AddColumn = ({ addColumn, props }) => {
  return (
    <StyledAddColumn bg='none'w={1} onClick={addColumn} {...props}>
      <PlusCircle size={50} />
      <p>Add Column</p>
    </StyledAddColumn>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addColumn,
    },
    dispatch
  );
const mapStateToProps = state => ({
  columns: state.columns,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddColumn);
