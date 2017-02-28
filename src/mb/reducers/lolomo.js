import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import actionCreators from '../actions/lolomo-action-creators';

const initialState = Immutable.fromJS({
  selectedSubjectId: null,
  selectedRowKey: null,
  tabs: {
    selectedTabId: 'general'
  }
});

export default handleActions({
  [actionCreators.selectSubject](state, { payload: selection }) {
    if (selection) {
      const { subject, rowKey } = selection;
      return state.merge({
        selectedSubjectId: subject ? subject.get('id') : null,
        selectedRowKey: subject ? rowKey : null,
        tabs: {
          selectedTabId: 'general'
        }
      });
    }
    return initialState;
  },
  [actionCreators.selectTab](state, { payload: tabId }) {
    return state.setIn(['tabs', 'selectedTabId'], tabId);
  }
}, initialState);
