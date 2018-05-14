import { combineReducers } from 'redux';
import ColumnReducer from './columnReducer';

export default combineReducers({
  column: ColumnReducer,
});
