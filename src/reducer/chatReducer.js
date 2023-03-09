import { MESSAGE_SEND } from '../actions/chatAction';

const initialState = {
  messages: [],
  modal: false,
};

function chatReducer(state = initialState, action = {}) {
  const { messages } = state;
  switch (action.type) {
    case MESSAGE_SEND:
      return {
        ...state,
        messages: [...messages, action.payload],
      };
    default:
      return state;
  }
}
export default chatReducer;
