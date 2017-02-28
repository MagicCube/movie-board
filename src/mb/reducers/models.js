import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import actionCreators from '../actions/model-action-creators';

const initialState = Immutable.fromJS({
  inTheaters: { count: 0, subjects: [] },
  comingSoon: { count: 0, subjects: [] },
  top20: { count: 0, subjects: [] }
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
  [actionCreators.loadSubject](state, { payload: subject }) {
    const newState = state.map((model) => {
      const entry = model.get('subjects').findEntry(s => s.get('id') === subject.get('id'));
      if (entry) {
        return model.mergeIn(['subjects', entry[0]], subject);
      }
      return model;
    });
    return newState;
  }
}, initialState);
