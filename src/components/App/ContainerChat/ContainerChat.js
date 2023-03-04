import "./chat.scss";
import { useSelector } from "react-redux";
import BubbleChat from "./BubbleChat";

const ContainerChat = () => {
  const chat = useSelector((state) => state.chat);

  return (
    <div className="container">
      {chat.map(
        (chat) =>
          chat && (
            <div key={chat.id}>
              <h2 className="container-user">{chat.user}</h2>
              <div className="container-content">{chat.content}</div>
            </div>
          )
      )}
    </div>
  );
};

export default ContainerChat;
