export const ON_CHANGE = "ON_CHANGE";
export const ON_SUBMIT = "ON_SUBMIT";
export const CONNEXION = 'CONNEXION';

export const newChatOnChange = (inputChat) => ({
  type: ON_CHANGE,
  inputChat,
});

export const newConnexion = (payload) => ({
  type: CONNEXION,
  payload,
});
