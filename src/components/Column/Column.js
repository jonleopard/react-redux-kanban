import React from 'react';
import styled from 'styled-components';
import { Box, Absolute, Relative } from 'rebass';
import { MoreHorizontal } from 'react-feather';
import { connect } from 'react-redux';
import ColumnTitle from './ColumnTitle';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';
import { bindActionCreators } from 'redux';
import { addCard } from '../Card/actions';

const StyledColumn = styled(Box)`
  min-width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eff1f5;
  border-radius: 4px;
  border: 1px solid #ebedef;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

const Column = ({ cardData, columnId, columnData, addCard }) => {
  return (
    <StyledColumn px={2} pt={2} pb={1} mr={4}>
      <Relative>
        <Absolute bottom={0} right={0}>
          <MoreHorizontal
            color="gray"
            onClick={() => {
              console.log('hello');
            }}
          />
        </Absolute>
      </Relative>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);
