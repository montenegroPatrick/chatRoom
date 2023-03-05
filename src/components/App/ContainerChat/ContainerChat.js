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
            <BubbleChat key={chat.id} content={chat.content} user={chat.user} />
          )
      )}
    </div>
  );
};

export default ContainerChat;
