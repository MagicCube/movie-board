import { handleActions } from 'redux-actions';

import actionCreators from '../actions/model-action-creators';

const initialState = {
  inTheaters: { count: 0, subjects: [] },
  comingSoon: { count: 0, subjects: [] }
};

export default handleActions({
  [actionCreators.loadInTheaters](state, action) {
    return {
      ...state,
      inTheaters: action.payload
    };
  },
  [actionCreators.loadComingSoon](state, action) {
    return {
      ...state,
      comingSoon: action.payload
    };
  }
}, initialState);
