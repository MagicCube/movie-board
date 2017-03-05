import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import actionCreators from '../actions/status-action-creators';

const initialState = Immutable.fromJS({
  isLoading: false
});

export default handleActions({
  [actionCreators.load](state) {
    return state.set('isLoading', true);
  },
  [actionCreators.loadComplete](state) {
    return state.set('isLoading', false);
  }
}, initialState);
