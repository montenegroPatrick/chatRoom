import { combineReducers, createStore } from "redux";
import formReducer from "../reducer/formReducer.js";
import chatReducer from "../reducer/chatReducer.js";

const rootReducer = combineReducers({ form: formReducer, chat: chatReducer });

const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
