import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

// this enables the chrome devtools for redux only in development
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const initialState = {};

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware, thunkMiddleware))
);

export default store;
