import { createAction } from 'redux-actions';

import movieApi from '../../db/api/movie';

export default {
  selectSubject: createAction('SELECT_SUBJECT')
};
