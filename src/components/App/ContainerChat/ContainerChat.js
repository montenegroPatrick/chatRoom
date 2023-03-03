import "./chat.scss";
import { useSelector } from "react-redux";
import BubbleChat from "./BubbleChat";

const ContainerChat = () => {
  const chatsSended = useSelector((rootReducer) => rootReducer.chat);

  return (
    <div className="containerChat">
      {chatsSended.map((chat) => {
        <BubbleChat key={chat.id} {...chat} />;
      })}
    </div>
  );
};

export default ContainerChat;
