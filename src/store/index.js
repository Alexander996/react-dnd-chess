import {createStore, applyMiddleware} from 'redux';

import reducer from '../reducers';
import changeKnightPosition from '../middlewares/changeKnightPosition';

const enhancer = applyMiddleware(changeKnightPosition);

const store = createStore(reducer, {}, enhancer);

export default store;
