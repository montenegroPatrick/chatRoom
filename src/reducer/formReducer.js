import { ON_CHANGE, ON_SUBMIT } from "../actions/formAction";

const initialState = {
  inputChat: "",
  user: "super chat",
};

function formReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        inputChat: action.inputChat,
      };
    case ON_SUBMIT:
      return {
        ...state,
        inputChat: actionChat,
      };
    default:
      return state;
  }
}

export default formReducer;
