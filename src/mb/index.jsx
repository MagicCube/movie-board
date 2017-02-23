import configStore from './store/config-store';
import actionCreators from './actions/entities-action-creators';

const store = configStore();
store.dispatch(actionCreators.loadComingSoon());
store.dispatch(actionCreators.loadInTheaters());
