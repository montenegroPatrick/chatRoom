export const MESSAGE_SEND = 'MESSAGE_SEND';

export const newHistoryChat = (payload) => ({
  type: MESSAGE_SEND,
  payload,
});

export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';

export function connectWebsocket() {
  return {
    type: WEBSOCKET_CONNECT,
  };
}
