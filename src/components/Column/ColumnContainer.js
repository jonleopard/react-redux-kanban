import React, { Component } from 'react';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { Flex, Box, Lead } from 'rebass';
import { PlusCircle } from 'react-feather';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';
import { fetchDefinitions } from '../../actions/cardActions';

const StyledColumn = styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eff1f5;
  border-radius: 4px;
  border: 1px solid #ebedef;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
`;

const StyledAddColumn = styled(Box)`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #cfd7df;
  transition: 150ms ease;

  &:hover {
    color: #8898aa;
    transition: 150ms ease;
    background-color: transparent;
  }
`;

const RowTitle = styled(Textarea)`
  background: transparent;
  border: none;
  font-weight: 800;
  font-size: 18px
  resize: none;
  outline: 0px none transparent;
  margin-bottom: 14px;
`;

class ColumnContainer extends Component {
  componentWillMount() {
    this.props.fetchDefinitions();
  }
  render() {
    const cardItems = this.props.definitions.map((card, i) => (
      <div key={i}>
        <h3>{card.definition}</h3>
      </div>
    ));
    return (
      <Flex>
        <StyledColumn px={2} pt={2} pb={1} mr={4}>
          <RowTitle children="Weekday Names" type="text"/>
          <Card />
          <AddCard />
        </StyledColumn>
        <StyledAddColumn w={1}>
          <PlusCircle size={50} />
          <p>Add Column</p>
        </StyledAddColumn>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  definitions: state.definitions.cards,
});

export default connect(mapStateToProps, { fetchDefinitions })(ColumnContainer);
