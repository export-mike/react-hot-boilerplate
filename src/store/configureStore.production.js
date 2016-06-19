import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      createSagaMiddleware(rootSaga)
    )
  );

  return createStore(rootReducer, initialState, enhancer);
}
