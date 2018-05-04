import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Flex, Box } from 'rebass';
import { PlusCircle } from 'react-feather';
import Card from '../Card/Card';
import AddCard from '../Card/AddCard';
import { fetchDefinitions } from '../../actions/cardActions';

const StyledColumn = styled(Box)`
  max-width: 300px;
  border-right: 1px dashed #cfd7df;
`;

const StyledAddColumn = styled(StyledColumn)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #cfd7df;
  transition: 150ms ease;

  &:hover {
    color: #8898aa;
    transition: 150ms ease;
  }
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
        <StyledColumn w={1} pr={4}>
          <Card>{cardItems}</Card>
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
