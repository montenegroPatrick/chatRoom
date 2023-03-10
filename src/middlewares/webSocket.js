/* eslint-disable import/no-extraneous-dependencies */
import { io } from 'socket.io-client';

import { WEBSOCKET_CONNECT, MESSAGE_SEND, addMessage } from '../actions/chatAction';

let socket;
const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      // je me connecte à WS
      socket = io('http://localhost:3001/');

      //
      socket.on('server_send_message', (message) => {
        console.log('>>connectIo');
        store.dispatch(addMessage(message));
      });

      break;
    }

    case MESSAGE_SEND:
      socket.emit('client_send_message', {
        author: action.payload.user,
        content: action.payload.content,
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default websocket;
