import { createAction } from 'redux-actions';

import movieApi from '../../db/api/movie';

export default {
  loadInTheaters: createAction('LOAD_IN_THEATERS', movieApi.inTheaters),
  loadComingSoon: createAction('LOAD_COMING_SOON', movieApi.comingSoon),
  loadTop20: createAction('LOAD_TOP_20', movieApi.top20),
  loadSubject: createAction('LOAD_SUBJECT', movieApi.subject)
};
