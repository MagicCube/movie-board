import actionCreators from '../actions/status-action-creators';


const loadingActions = [];

export default store => next => action => {
  if (action.payload instanceof Promise) {
    loadingActions.push(action.type);
    if (!store.getState().getIn(['status', 'isLoading'])) {
      store.dispatch(actionCreators.load());
    }
  }
  else {
    const index = loadingActions.indexOf(action.type);
    if (index !== -1) {
      loadingActions.splice(index, 1);
      if (loadingActions.length === 0 && store.getState().getIn(['status', 'isLoading'])) {
        store.dispatch(actionCreators.loadComplete());
      }
    }
  }
  next(action);
};
