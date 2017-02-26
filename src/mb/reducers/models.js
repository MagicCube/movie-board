import { handleActions } from 'redux-actions';

import actionCreators from '../actions/model-action-creators';

const initialState = {
  inTheaters: { count: 0, subjects: [] },
  comingSoon: { count: 0, subjects: [] }
};

export default handleActions({
  [actionCreators.loadInTheaters](state, { payload: inTheaters }) {
    return {
      ...state,
      inTheaters
    };
  },
  [actionCreators.loadComingSoon](state, { payload: comingSoon }) {
    return {
      ...state,
      comingSoon
    };
  }
}, initialState);
