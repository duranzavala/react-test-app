import { createStore, combineReducers, applyMiddleware } from  'redux'; 
import thunk from 'redux-thunk';

import reducers from '../reducers';

const combine = combineReducers(reducers);
const store = createStore(combine, applyMiddleware(thunk));

export default store;
