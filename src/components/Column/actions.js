export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_CARD = 'ADD_CARD';

//export function fetchColumns() {
//  return async function(dispatch) {
//    const res = await fetch(`API_URL`);
//    const columns = await res.json();
//    return dispatch({
//      type: 'FETCH_COLUMNS',
//     data: columns[0][0]['definition'],
//    });
// };
// }

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
