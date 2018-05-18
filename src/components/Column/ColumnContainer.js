import React, { Component } from 'react';
import { Flex } from 'rebass';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Column from './Column';
import AddColumn from './AddColumn';

import { addCard } from '../Card/actions';
import { addColumn, removeColumn } from './actions';

class ColumnContainer extends Component {
  render() {
    return (
      <Flex>
        {this.props.columns.map((column, index) => {
          return (
            <Column
              key={'column' + index}
              columnData={column}
              columnId={index}
            />
          );
        })}
        <AddColumn
          onClick={() => {
            this.props.addColumn();
          }}
        />
        <button
          onClick={() => {
            this.props.removeColumn();
          }}
        >
          delete
        </button>
      </Flex>
    );
  }
}

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
