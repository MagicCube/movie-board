import { createAction } from 'redux-actions';

import modelActionCreators from './model-action-creators';

export default {
  selectSubject: createAction('SELECT_SUBJECT'),
  loadSubject: modelActionCreators.loadSubject
};
