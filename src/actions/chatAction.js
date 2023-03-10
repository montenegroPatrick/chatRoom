export const MESSAGE_SEND = 'MESSAGE_SEND';

export const newHistoryChat = (payload) => ({
  type: MESSAGE_SEND,
  payload,
});
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: { message },
});
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

export function connectWebsocket() {
  return {
    type: WEBSOCKET_CONNECT,
  };
}
