import { FETCH_COLUMNS, FETCH_CARDS, ADD_COLUMN, ADD_CARD } from '../actions';

const initialState = {
  columns: [],
  cards: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    case FETCH_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
}
