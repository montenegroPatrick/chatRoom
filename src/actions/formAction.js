/* eslint-disable quotes */
export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
export const CONNEXION = 'CONNEXION';
export const AUTHENTIFICATION = 'AUTHENTIFICATION';
export const CATCH_401 = 'CATCH_401';
export const CHANGE_LOADING = 'CHANGE_LOADING';

export const newChatOnChange = (inputChat) => ({
  type: ON_CHANGE,
  inputChat,
});

export const newConnexion = (payload) => ({
  type: CONNEXION,
  payload,
});

export const newAuthentification = (payload) => ({
  type: AUTHENTIFICATION,
  payload,
});

export const catchError = () => ({
  type: CATCH_401,
});

export const changeLoading = (payload) => ({
  type: CHANGE_LOADING,
  payload,
});
