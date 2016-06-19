import { combineReducers } from 'redux';
import counter, * as fromCounter from './counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

export const getCounter = state => fromCounter.getCounter(state.counter);
