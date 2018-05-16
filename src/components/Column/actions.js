export const ADD_COLUMN = 'ADD_COLUMN';

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

let nextColumnId = 0;
export function addColumn(column) {
  return {
    type: 'ADD_COLUMN',
    id: nextColumnId++,
    payload: column,
  };
}
