import { handleActions } from 'redux-actions';

import actionCreators from '../actions/lolomo-action-creators';

const initialState = {
  selectedSubjectId: null,
  selectedRowKey: null
};

export default handleActions({
  [actionCreators.selectSubject](state, action) {
    const { subject, rowKey } = action.payload;
    return {
      ...state,
      selectedSubjectId: subject ? subject.id : null,
      selectedRowKey: subject ? rowKey : null
    };
  }
}, initialState);
