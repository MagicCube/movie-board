import { applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import progressMiddleware from '../middleware/ProgressMiddleware';


export default applyMiddleware(progressMiddleware, reduxPromise);
