import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import HomePage from './containers/HomePage';


/**
 * Routes of application.
 */
export function configRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    </Route>
  );
}
