import { ADD_MESSAGE } from '../actions/chatAction';

const initialState = {
  messages: [],
  modal: false,
};

function chatReducer(state = initialState, action = {}) {
  const { messages } = state;
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...messages, action.payload.message],
      };
    default:
      return state;
  }
}
export default chatReducer;
