export const ADD_CARD = 'ADD_CARD';

export function addCard(columnId) {
  return {
    type: 'ADD_CARD',
    columnId,
  };
}
