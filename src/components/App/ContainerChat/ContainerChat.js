import "./chat.scss";
import { useSelector } from "react-redux";
import BubbleChat from "./BubbleChat";

const ContainerChat = () => {
  const chat = useSelector((state) => state.chat);

  return (
    <div className="container">
      <div className="container">
        <h2 className="container-user">kdeihfjpsd</h2>
        <div className="container-content">balkalla</div>
      </div>
      {chat.map((chat) => chat && <p>{chat.content}</p>)}
    </div>
  );
};

export default ContainerChat;
