import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { newHistoryChat } from "../../../actions/chatAction";
import {
  newChatOnChange,
  resetChatOnSubmit,
} from "../../../actions/formAction";
import { FormControl, TextField } from "@mui/material";
import getNewId from "../../../utils/function";
const Form = () => {
  const dispatch = useDispatch();
  const stateChat = useSelector((state) => state.chat);
  const inputChat = useSelector((state) => state.form.inputChat);
  const user = useSelector((state) => state.form.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      newHistoryChat({
        id: getNewId(stateChat),
        content: inputChat,
        user: user,
      })
    );
  };
  const handleChange = (event) => {
    dispatch(newChatOnChange(event.target.value));
  };

  return (
    <div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label={user}
          variant="standard"
          className="form-input"
          type="text"
          value={inputChat}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Form;
