import { createStore } from 'redux';

import reducers from '../reducers';

const enhancer = process.env.NODE_ENV === 'production' ? require('./enhancer').default : require('./enhancer.dev').default;

export default function configStore(initialState) {
  return enhancer(createStore)(
    reducers,
    initialState,
  );
}
