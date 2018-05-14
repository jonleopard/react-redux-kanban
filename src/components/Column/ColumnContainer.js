import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { PlusCircle } from 'react-feather';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';
import { fetchColumns, fetchCards } from '../../actions';
import Column from './Column';
import AddColumn from './AddColumn';

class ColumnContainer extends Component {
  componentWillMount() {
    this.props.fetchColumns();
    this.props.fetchCards();
  }
  render() {
    return (
      <Flex>
        <Column title="hello">
          <Card placeholder="Card(possibleValues)" />
          <AddCard />
        </Column>
        <AddColumn w={1}>
          <PlusCircle size={50} />
          <p>Add Column</p>
        </AddColumn>
      </Flex>
    );
  }
}

// whateverr is returned will show up as props
// inside of ColumnContainer
const mapStateToProps = state => ({
  columns: state.column.columns,
  cards: state.cards,
});

export default connect(mapStateToProps, { fetchColumns, fetchCards })(
  ColumnContainer
);
