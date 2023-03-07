/* eslint-disable quotes */
/* eslint-disable no-useless-escape */
export const getNewId = (stateChat) => {
  if (stateChat.length < 1) {
    return 1;
  }
  const ids = stateChat.map((item) => item.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};

export const checkPassword = (password) => {
  const errorList = [];
  if (password.length < 8) {
    errorList.push('le mot de pass doit contenir au minimum 8 charactères');
  }
  if (!password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/)) {
    errorList.push('le mot de pass doit contenir au minimum une lettre ou un  charactère special');
  }
  if (!password.match(/[a-z]/)) {
    errorList.push('le mot de pass doit contenir au minimum une lettre en Minuscule');
  }
  if (!password.match(/[A-Z]/)) {
    errorList.push('le mot de pass doit contenir au minimum une lettre en Majuscule');
  }
  return errorList;
};

export const checkEmail = (email) => {
  const error = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? false : "l'email doit être exacte";
  return error;
};
