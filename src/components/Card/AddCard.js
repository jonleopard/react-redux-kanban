import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';
import { Plus } from 'react-feather';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCard } from '../Card/actions';

const StyledAddCard = styled(Button)`
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: #cfd7df;
  padding: 10px 12px;
  border-radius: 4px;
  border: 2px dashed;
  transition: 150ms ease;

  &:hover {
    color: #8898aa;
    transition: 150ms ease;
  }
`;

const AddCard = ({ addCard, props }) => {
  return (
    <StyledAddCard mt={3} onClick={addCard} {...props}>
      <Plus />
    </StyledAddCard>
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
  cards: state.card.cards,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
