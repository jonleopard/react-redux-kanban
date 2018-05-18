import { ADD_COLUMN } from './actions';

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
        definition: 1,
        possibleValues: [],
      },
      {
        definition: 2,
        possibleValues: [],
      },
    ],
  },
  {
    definition: 'year',
    possibleValues: [
      {
        definition: 1980,
        possibleValues: [],
      },
      {
        definition: 1981,
        possibleValues: [],
      },
    ],
  },
];

export default function(state = initialState, action) {
  let newState;

  switch (action.type) {
    case 'ADD_CARD':
      let dummyCard = {
        definition: 'Dummy Card',
        possibleValues: [],
      };

      newState = state.slice();
      newState[action.columnId].possibleValues.push(dummyCard);

      return newState;

    case 'ADD_COLUMN':
      let dummyColumn = {
        definition: 'Dummy Column',
        possibleValues: [],
      };

      newState = state.slice();
      newState.push(dummyColumn);

      return newState;

    case 'REMOVE_COLUMN':
      newState = state.slice();

      newState.pop();
      return newState;

    default:
      return state;
  }
}
