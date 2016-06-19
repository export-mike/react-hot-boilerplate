import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(
      thunk,
      sagaMiddleware
    ),
  );

  const store = createStore(rootReducer, initialState, enhancer);

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
}
