import React, { Component } from 'react';
import { Flex } from 'rebass';
import { connect } from 'react-redux';
import { fetchColumns, fetchCards } from '../../actions';
import Column from './Column';
import AddColumn from './AddColumn';

class ColumnContainer extends Component {
  render() {
    return (
      <Flex>
        <Column />
        <AddColumn />
      </Flex>
    );
  }
}

// // whateverr is returned will show up as props
// // inside of ColumnContainer
// const mapStateToProps = state => ({
//   columns: state.column.columns,
//   cards: state.cards,
// });

export default ColumnContainer;
