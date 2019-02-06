import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';
// import loggingMiddleWare from '../middleware/index';
import logger from 'redux-logger';
// middleware

// Pure Functions

// Side Effects
  // API Request

// Store
let store = createStore(
  reducers, 
  applyMiddleware(thunk, logger)
);

export default store;
