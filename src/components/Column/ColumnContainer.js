import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { PlusCircle } from 'react-feather';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';
import { fetchColumns } from '../../actions/columnActions';
import Column from './Column';
import AddColumn from './AddColumn';
import ColumnTitle from './ColumnTitle';

class ColumnContainer extends Component {
  componentWillMount() {
    this.props.fetchColumns();
  }
  render() {
    return (
      <Flex>
        <Column px={2} pt={2} pb={1} mr={4}>
          <ColumnTitle placeholder="Column title(definition)" />
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

const mapStateToProps = state => ({
  columns: state.column.columns,
});

export default connect(mapStateToProps, { fetchColumns })(ColumnContainer);
