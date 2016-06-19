import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import rootSaga from './sagas';

const store = configureStore();

store.runSaga(rootSaga);

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  rootEl
);
if (module.hot) {
  module.hot.accept('./App', () => {
  // If you use Webpack 2 in ES modules mode, you can
  // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App'); // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
    rootEl
  );
  });
}
