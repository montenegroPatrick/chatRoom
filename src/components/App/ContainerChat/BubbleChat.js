import "./chat.scss";

const BubbleChat = ({ user, content }) => {
  return (
    <div className="containerChat">
      <h2 className="containerChat_user">{user}</h2>
      <div className="containerChat_content">{content}</div>
    </div>
  );
};

export default BubbleChat;
