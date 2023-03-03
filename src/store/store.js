import { combineReducers, createStore } from "redux";
import { formReducer } from "../reducer/formReducer";
import { chatReducer } from "../reducer/chatReducer";

const rootReducer = combineReducers({ form: formReducer, chat: chatReducer });

const store = createStore(
  rootReducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
console.log(store.getState());
export default store;
