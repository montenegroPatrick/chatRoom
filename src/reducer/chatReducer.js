import { ON_SUBMIT } from "../actions/chatAction";

const initialState = [];

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ON_SUBMIT:
      return [...state, action.objet];
    default:
      return state;
  }
}

export default chatReducer;
