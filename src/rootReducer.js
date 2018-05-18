import { combineReducers } from 'redux';

import columns from './components/Column/reducer';
import card from './components/Card/reducer';

const rootReducer = combineReducers({
  columns,
  card,
});

export default rootReducer;
