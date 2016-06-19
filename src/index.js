import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import rootSaga from './sagas';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

store.runSaga(rootSaga);
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <App history={history} store={store} />
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
        <NextApp history={history} store={store} />
      </AppContainer>,
    rootEl
  );
  });
}
