export const ADD_CARD = 'ADD_CARD';

let nextCardId = 0;
export function addCard() {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    addCard,
  };
}
