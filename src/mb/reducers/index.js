import { combineReducers } from 'redux-immutable';

import lolomo from './lolomo';
import models from './models';

export default combineReducers({
  lolomo,
  models
});
