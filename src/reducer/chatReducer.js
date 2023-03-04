import { ON_SUBMIT } from "../actions/chatAction";

const initialState = [
  {
    id: 1,
    content: "",
    user: "user",
  },
];

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ON_SUBMIT:
      return [...state, action.objet];
    default:
      return state;
  }
}

export default chatReducer;
