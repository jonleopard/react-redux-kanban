import { combineReducers } from 'redux';
import definitionReducer from './definitionReducer';

export default combineReducers({
  definitions: definitionReducer,
});
