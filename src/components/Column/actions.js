export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_CARD = 'ADD_CARD';

export function addColumn() {
  return {
    type: 'ADD_COLUMN',
  };
}

export function removeColumn() {
  return {
    type: 'REMOVE_COLUMN',
  };
}
