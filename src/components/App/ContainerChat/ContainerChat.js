/* eslint-disable import/order */
/* eslint-disable quotes */
import './chat.scss';
import { useSelector } from 'react-redux';
import BubbleChat from './BubbleChat';
import { useEffect, useRef } from 'react';
import { getAllMessages } from '../../../selectors/functions';

function ContainerChat() {
  const messages = useSelector(getAllMessages);
  const messagesEndRef = useRef(null);
  console.log(messages);
  const inputContent = messages.map((input) => input.content);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [inputContent]);

  return (
    <div className="container box-shadow">
      {messages.map(
        (chat) => chat && <BubbleChat key={chat.id} content={chat.content} user={chat.user} />,
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ContainerChat;
