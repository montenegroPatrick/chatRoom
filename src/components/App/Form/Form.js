import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { newHistoryChat } from "../../../actions/chatAction";
import {
  newChatOnChange,
  resetChatOnSubmit,
} from "../../../actions/formAction";

const Form = () => {
  const dispatch = useDispatch();

  const inputChat = useSelector((rootReducer) => rootReducer.form.inputCHat);

  const handleSubmit = (event) => {
    event.preventDefault();
    newHistoryChat({
      id: newDate().toString(),
      content: { inputChat },
      user: { user },
    });
    resetChatOnSubmit();
  };

  return (
    <div>
      <form
        className="form"
        action=""
        onSubmit={() => {
          dispatch(handleSubmit());
        }}
      >
        <input
          type="text"
          placeholder="Message"
          aria-label="Message"
          value={inputChat}
          onChange={(event) => {
            () => {
              dispatch(newChatOnChange(event.target.value));
            };
          }}
        />
      </form>
    </div>
  );
};

export default Form;
