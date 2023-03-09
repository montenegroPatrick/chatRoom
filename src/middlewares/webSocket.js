/* eslint-disable import/no-extraneous-dependencies */
import { io } from 'socket.io-client';

import { WEBSOCKET_CONNECT, MESSAGE_SEND } from '../actions/chatAction';

let socket;
const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      // je me connecte à WS
      socket = io('http://localhost:3001/');

      //
      socket.on('server_send_message', (message) => {
        console.log("Réception d'un message envoyé par le serveur");
        console.log(message);
      });

      break;
    }

    case MESSAGE_SEND:
      console.log(action);
      socket.emit('client_send_message', {
        author: 'fabien',
        content: 'blibli',
      });
      next(action);
      break;
    default:
      next(action);
  }
};

export default websocket;
