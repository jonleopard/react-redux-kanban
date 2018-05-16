import { combineReducers } from 'redux';

import card from './components/Card/reducer';
import column from './components/Column/reducer';

const rootReducer = combineReducers({
  card,
  column,
});

export default rootReducer;
