export const ON_CHANGE = "ON_CHANGE";
export const ON_SUBMIT = "ON_SUBMIT";

export const newChatOnChange = (inputChat) => ({
  type: ON_CHANGE,
  inputChat,
});
