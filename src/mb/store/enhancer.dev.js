import { composeWithDevTools } from 'redux-devtools-extension';

import enhancer from './enhancer';

export default composeWithDevTools(enhancer);
