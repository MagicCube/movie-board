import { handleActions } from 'redux-actions';

import actionCreators from '../actions/lolomo-action-creators';

const initialState = {
  selectedSubjectId: null,
  selectedRowKey: null
};

export default handleActions({
  [actionCreators.selectSubject](state, { payload: { subject, rowKey } }) {
    return {
      ...state,
      selectedSubjectId: subject ? subject.get('id') : null,
      selectedRowKey: subject ? rowKey : null
    };
  }
}, initialState);
