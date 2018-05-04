import { FETCH_DEFINITIONS, ADD_DEFEINITION } from '../actions/types';

const initialState = {
  cards: [],
  card: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEFINITIONS:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
}
