export const FETCH_COLUMNS = 'FETCH_COLUMNS';
export const ADD_COLUMN = 'ADD_COLUMN';

export const FETCH_CARDS = 'FETCH_CARDS';
export const ADD_CARD = 'ADD_CARD';

const JSON_URL =
  'https://gist.githubusercontent.com/pocketjoso/cfc14569428be2ca94307d7320b1f8d6/raw/82ed8042a92bce01837ff82577dc025b1f535558/snips-linguist-challenge-data--simple-one-level.json';

export const fetchColumns = () => dispatch => {
  fetch(`${JSON_URL}`)
    .then(res => res.json())
    .then(columns =>
      dispatch({
        type: FETCH_COLUMNS,
        payload: columns,
      })
    );
};

export const fetchCards = () => dispatch => {
  fetch(`${JSON_URL}`)
    .then(res => res.json())
    .then(cards =>
      dispatch({
        type: FETCH_CARDS,
        payload: cards,
      })
    );
};
