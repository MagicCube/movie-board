import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import actionCreators from '../actions/model-action-creators';

const initialState = Immutable.fromJS({
  inTheaters: { count: 0, subjects: [] },
  comingSoon: { count: 0, subjects: [] },
  top20: { count: 0, subjects: [] },
  searchResults: { count: 0, subjects: [] }
});

export default handleActions({
  [actionCreators.loadInTheaters](state, { payload: inTheaters }) {
    return state.set('inTheaters', inTheaters);
  },
  [actionCreators.loadComingSoon](state, { payload: comingSoon }) {
    return state.set('comingSoon', comingSoon);
  },
  [actionCreators.loadTop20](state, { payload: top20 }) {
    return state.set('top20', top20);
  },
  [actionCreators.search](state, { payload: results }) {
    return state.set('searchResults', results);
  }
}, initialState);
