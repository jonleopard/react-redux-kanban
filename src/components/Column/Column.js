import React, { Component } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { connect } from 'react-redux';
import ColumnTitle from './ColumnTitle';
import ColumnOptions from './ColumnOptions';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';
import { bindActionCreators } from 'redux';
import { addCard } from '../Card/actions';

const StyledColumn = styled(Box)`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #eff1f5;
  border-radius: 4px;
  border: 1px solid #ebedef;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

//class Column extends Component {
// render() {
//  return (
//   <StyledColumn px={2} pt={2} pb={1} mr={4}>
//    <ColumnOptions />
//   <ColumnTitle title={this.props.columnData.definition} />
//   {this.props.columnData.possibleValues.map((card, index) => {
//     return <Card key={'card' + index} cardData={card} />;
//    })}
//     <AddCard
//      onClick={() => {
//        this.props.addCard(this.props.columnId);
//       }}
//     />
//    </StyledColumn>
//  );
//  }
//}

const Column = ({ cardData, columnId, columnData, addCard }) => {
  return (
    <StyledColumn px={2} pt={2} pb={1} mr={4}>
      <ColumnOptions />
      <ColumnTitle title={columnData.definition} />
      {columnData.possibleValues.map((card, index) => {
        return <Card key={'card' + index} cardData={card} />;
      })}
      <AddCard
        onClick={() => {
          addCard(columnId);
        }}
      />
    </StyledColumn>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCard,
    },
    dispatch
  );
const mapStateToProps = state => ({
  cards: state.card,
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
