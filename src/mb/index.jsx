import configStore from './store/config-store';
import actionCreators from './actions/entities-action-creators';

import './res/index.less';
import './index.html';

const store = configStore();
store.dispatch(actionCreators.loadComingSoon());
store.dispatch(actionCreators.loadInTheaters());
