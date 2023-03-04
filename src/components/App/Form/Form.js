import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { newHistoryChat } from "../../../actions/chatAction";
import {
  newChatOnChange,
  resetChatOnSubmit,
} from "../../../actions/formAction";

const Form = () => {
  const dispatch = useDispatch();

  const inputChat = useSelector((state) => state.form.inputChat);
  const user = useSelector((state) => state.form.user);
  console.log(inputChat);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      newHistoryChat({
        id: new Date().toString(),
        content: inputChat,
        user: user,
      })
    );
    dispatch(resetChatOnSubmit());
  };
  const handleChange = (event) => {
    dispatch(newChatOnChange(event.target.value));
  };

  return (
    <div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Message"
          aria-label="Message"
          value={inputChat}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Form;
