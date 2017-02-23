import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import { configStore } from './store';
import { configRoutes } from './routes';

const store = configStore();

$(() => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        {configRoutes()}
      </Router>
    </Provider>,
    document.getElementById('mbMountPoint')
  );
});
