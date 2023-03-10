/* eslint-disable import/order */
/* eslint-disable quotes */
import './chat.scss';
import { useSelector } from 'react-redux';
import BubbleChat from './BubbleChat';
import { useEffect, useRef } from 'react';
import { getAllMessages, getUser } from '../../../selectors/functions';
import useSound from '../../../utils/sound';
import playSound from '../../../utils/sound';

function ContainerChat() {
  const messages = useSelector(getAllMessages);
  const messagesEndRef = useRef(null);
  const inputContent = messages.map((input) => input.content);
  const currentUser = useSelector(getUser);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    if (messages.find((message) => message.author !== currentUser)) {
      playSound('xylo');
    }
  }, [inputContent]);

  return (
    <div className="container box-shadow">
      {messages.map(
        (chat) => chat && <BubbleChat key={chat.id} content={chat.content} author={chat.author} />,
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ContainerChat;
