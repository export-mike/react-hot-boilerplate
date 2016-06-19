import { combineReducers } from 'redux';
import counter, * as fromCounter from './counter';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  routing: routerReducer,
});

export default rootReducer;

export const getCounter = state => fromCounter.getCounter(state.counter);
