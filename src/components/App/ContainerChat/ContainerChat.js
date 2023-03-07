/* eslint-disable import/order */
/* eslint-disable quotes */
import "./chat.scss";
import { useSelector } from "react-redux";
import BubbleChat from "./BubbleChat";
import { useEffect, useRef } from "react";

function ContainerChat() {
  const chatState = useSelector((state) => state.chat);
  const messagesEndRef = useRef(null);

  const inputContent = chatState.map((input) => input.content);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [inputContent]);

  return (
    <div className="container">
      {chatState.map(
        (chat) => chat 
        && (<BubbleChat key={chat.id} content={chat.content} user={chat.user} />)
        )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ContainerChat;
