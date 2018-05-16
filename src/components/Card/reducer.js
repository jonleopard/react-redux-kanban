import { ADD_CARD } from './actions';

const initialState = {
  cards: [],
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        cards: data,
      };
    default:
      return state;
  }
}
