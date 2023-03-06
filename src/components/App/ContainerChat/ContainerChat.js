import "./chat.scss";
import { useSelector } from "react-redux";
import BubbleChat from "./BubbleChat";
import { useEffect, useRef } from "react";

const ContainerChat = () => {
  const chat = useSelector((state) => state.chat);
  const messagesEndRef = useRef(null);

  const inputContent = chat.map((input) => input.content);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [inputContent]);

  return (
    <div className="container">
      {chat.map(
        (chat) =>
          chat && (
            <BubbleChat key={chat.id} content={chat.content} user={chat.user} />
          )
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ContainerChat;
