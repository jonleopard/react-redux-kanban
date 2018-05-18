import { combineReducers } from 'redux';

import card from './components/Card/reducer';
import columns from './components/Column/reducer';

const rootReducer = combineReducers({
  columns,
  card,
});

export default rootReducer;
