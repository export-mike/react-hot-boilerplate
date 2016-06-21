import { combineReducers } from 'redux';
import counter, * as fromCounter from './counter';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  counter,
  routing: routerReducer,
  formReducer,
});

export default rootReducer;

export const getCounter = state => fromCounter.getCounter(state.counter);
