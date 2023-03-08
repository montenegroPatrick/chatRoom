import { ON_SUBMIT } from '../actions/chatAction';

const initialState = {
  messages: [],
  modal: false,
};

function chatReducer(state = initialState, action = {}) {
  const { messages } = state;
  switch (action.type) {
    case ON_SUBMIT:
      return {
        ...state,
        messages: [...messages, action.payload],
      };
    default:
      return state;
  }
}
export default chatReducer;
