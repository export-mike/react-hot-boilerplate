import React, { PropTypes } from 'react';
import Layout from './components/Layout';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

const App = ({ store }) =>
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="*" component={NotFound} />
        </Route>
        <DevTools />
      </Router>
      <DevTools />
    </div>
  </Provider>
;

App.propTypes = {
  store: PropTypes.object,
};

export default App;
