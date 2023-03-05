import "./chat.scss";

const BubbleChat = ({ user, content }) => {
  console.log(content);
  return (
    <div>
      <h2 className="container-user">{user}</h2>
      <div className="container-content">{content}</div>
    </div>
  );
};

export default BubbleChat;
