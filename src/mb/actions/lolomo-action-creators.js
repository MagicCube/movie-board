import { createAction } from 'redux-actions';

import modelActionCreators from './model-action-creators';

export default {
  selectSubject: createAction('SELECT_SUBJECT'),
  selectTab: createAction('SELECT_TAB'),
  loadSubject: modelActionCreators.loadSubject
};
