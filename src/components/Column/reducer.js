import { ADD_COLUMN, REMOVE_COLUMN, ADD_CARD } from './actions';

const initialState = [
  {
    definition: 'week day',
    possibleValues: [
      {
        definition: 'monday',
        possibleValues: [],
      },
      {
        definition: 'tuesday',
        possibleValues: [],
      },
    ],
  },
  {
    definition: 'week day number',
    possibleValues: [
      {
        definition: '1',
        possibleValues: [],
      },
      {
        definition: '2',
        possibleValues: [],
      },
    ],
  },
  {
    definition: 'year',
    possibleValues: [
      {
        definition: '1980',
        possibleValues: [],
      },
      {
        definition: '1981',
        possibleValues: [],
      },
    ],
  },
];

export default function(state = initialState, action) {
  let newState;

  switch (action.type) {
    case ADD_CARD:
      let newCard = {
        definition: null,
        possibleValues: [],
      };

      newState = state.slice();
      newState[action.columnId].possibleValues.push(newCard);

      return newState;

    case ADD_COLUMN:
      let newColumn = {
        definition: null,
        possibleValues: [],
      };

      newState = state.slice();
      newState.push(newColumn);

      return newState;

    case REMOVE_COLUMN:
      newState = state.slice();

      newState.pop();
      return newState;

    default:
      return state;
  }
}
