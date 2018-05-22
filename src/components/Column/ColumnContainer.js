import React from 'react';
import { Flex, Button } from 'rebass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from './Column';
import AddColumn from './AddColumn';

import { addCard } from '../Card/actions';
import { addColumn, removeColumn } from './actions';

const ColumnContainer = ({
  columns,
  columnData,
  columnId,
  addColumn,
  removeColumn,
}) => {
  return (
    <Flex>
      {columns.map((column, index) => {
        return (
          <Column key={'column' + index} columnData={column} columnId={index} />
        );
      })}
      <AddColumn
        onClick={() => {
          addColumn();
        }}
      />
      <Button
        bg="red"
        onClick={() => {
          removeColumn();
        }}
      >
        Remove Column
      </Button>
    </Flex>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard,
      addColumn,
      removeColumn,
    },
    dispatch
  );

const mapStateToProps = state => ({
  columns: state.columns,
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
