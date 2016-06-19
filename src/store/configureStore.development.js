import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(
      thunk,
      sagaMiddleware
    ),
    DevTools.instrument(),
    persistState(
      window.location.href.match(
        /[?&]debug_session=([^&#]+)\b/
      )
    )
  );

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)  // eslint-disable-line global-require
    );
  }

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
}
