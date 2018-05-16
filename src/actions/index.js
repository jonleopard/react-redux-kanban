export const ADD_CARD = 'ADD_CARD';
export const FETCH_COLUMNS = 'FETCH_COLUMNS';

// This is called an 'action creator'.
// It is just a function that returns an object.
export function addCard() {
  return {
    type: 'ADD_CARD',
  };
}

export function fetchColumns() {
  const API_URL =
    'https://gist.githubusercontent.com/pocketjoso/cfc14569428be2ca94307d7320b1f8d6/raw/82ed8042a92bce01837ff82577dc025b1f535558/snips-linguist-challenge-data--simple-one-level.json';

  return async function(dispatch) {
    const res = await fetch(`API_URL`);
    const columns = await res.json();
    return dispatch({
      type: 'FETCH_COLUMNS',
      data: res.definition,
    });
  };
}

// function receiveColumnsAction(columnsObj){
//     return{
//         type: RECEIVE_COLUMNS,
//         columns: columnsObj
//     }
// }

