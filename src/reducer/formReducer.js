import { CATCH_401, CHANGE_LOADING, CONNEXION, LOGOUT } from '../actions/formAction';

const initialState = {
  inputChat: '',
  user: '',
  password: '',
  error: '',
  login: false,
  loading: false,
};

function formReducer(state = initialState, action = {}) {
  const { payload } = action;
  switch (action.type) {
    case CONNEXION: {
      const { pseudo, login, avatar, color } = payload;
      return {
        ...state,
        user: pseudo,
        login,
        avatar,
        color,
        loading: false,
      };
    }
    case CATCH_401:
      return {
        ...state,
        error: "l'authentification à échoué",
        loading: false,
      };
    case CHANGE_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
        user: '',
      };

    default:
      return state;
  }
}

export default formReducer;
