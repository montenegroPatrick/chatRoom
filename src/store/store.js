import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import auth from '../middlewares/auth';
// on importe les middlewares

import debug from '../middlewares/debug';
import chatReducer from '../reducer/chatReducer';
import formReducer from '../reducer/formReducer';

// on met bout à bout tous nos middlewares
const middlewares = applyMiddleware(debug, auth);
const rootReducer = combineReducers({ form: formReducer, chat: chatReducer });
// on met bout à bout le redux devtools et nos middlewares
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(rootReducer, enhancers);

export default store;
