import { ADD_CARD } from './actions';

const initialState = {};

export default function(state = initialState, action) {
  const { type, cards } = action;
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        cards,
      };
    default:
      return state;
  }
}
