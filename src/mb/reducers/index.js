import { combineReducers } from 'redux-immutable';

import lolomo from './lolomo';
import models from './models';
import status from './status';

export default combineReducers({
  lolomo,
  models,
  status
});
