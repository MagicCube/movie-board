import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

/**
 * Routes of application.
 */
export function configRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/search" component={SearchPage} />
    </Route>
  );
}
