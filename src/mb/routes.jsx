import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';

export function configRoutes() {
  return (
    <Route path="/" component={App}></Route>
  );
}
