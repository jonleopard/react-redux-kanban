import { FETCH_COLUMNS, ADD_COLUMN, ADD_DEFINITION } from '../actions/types';

const initialState = {
  columns: [],
  cards: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COLUMNS:
      return {
        ...state,
        columns: action.payload,
      };
    default:
      return state;
  }
}
