import { createAction } from 'redux-actions';

import movieApi from '../../db/api/movie';

export default {
  loadComingSoon: createAction('LOAD_COMING_SOON', movieApi.comingSoon),
  loadInTheaters: createAction('LOAD_IN_THEATERS', movieApi.inTheaters),
  loadSubject: createAction('LOAD_SUBJECT', movieApi.subject),
  loadTop20: createAction('LOAD_TOP_20', movieApi.top20),
  search: createAction('SEARCH', movieApi.search)
};
