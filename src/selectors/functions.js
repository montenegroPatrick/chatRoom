function getAllMessages({ chat }) {
  return chat.messages;
}

function getErrors({ form }) {
  return form.error;
}
function getLogin({ form }) {
  return form.login;
}
function getUser({ form }) {
  return form.user;
}
function getLoading({ form }) {
  return form.loading;
}

export { getAllMessages, getErrors, getLogin, getUser, getLoading };
