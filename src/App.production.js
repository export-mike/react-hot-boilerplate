import React, { PropTypes, Component } from 'react';
import Layout from './components/Layout';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { store, history } = this.props;

    return (<Provider store={store}>
      <div>
        <Router history={history}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </div>
    </Provider>);
  }
}

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default App;
