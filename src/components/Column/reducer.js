import { ADD_COLUMN } from './actions';

const initialState = {
  columns: [],
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: data,
      };
    default:
      return state;
  }
}
