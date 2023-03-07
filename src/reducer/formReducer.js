import { CONNEXION, ON_CHANGE, ON_SUBMIT } from '../actions/formAction';

const initialState = {
  inputChat: '',
  user: '',
  password: '',
};

function formReducer(state = initialState, action = {}) {
  const { payload } = action;
  switch (action.type) {
    case ON_CHANGE:
      return {
        ...state,
        inputChat: action.inputChat,
      };
    case ON_SUBMIT:
      return {
        ...state,
        inputChat: '',
      };
    case CONNEXION:
      return {
        ...state,
        user: payload.user,
        password: payload.password,
      };
    default:
      return state;
  }
}

export default formReducer;
