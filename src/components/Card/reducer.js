import { ADD_CARD } from './actions';

const initialState = {
  cards: [],
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        cards: !state.cards,
      };
    default:
      return state;
  }
}
