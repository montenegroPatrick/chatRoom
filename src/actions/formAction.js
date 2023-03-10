/* eslint-disable quotes */
export const CONNEXION = 'CONNEXION';
export const newConnexion = (payload) => ({
  type: CONNEXION,
  payload,
});

// action middleware
export const AUTHENTIFICATION = 'AUTHENTIFICATION';
export const CATCH_401 = 'CATCH_401';
export const CHANGE_LOADING = 'CHANGE_LOADING';

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
