/* eslint-disable no-unused-vars */
import './form.scss';
import { useEffect, useRef } from 'react';
import { FormControl, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getNewId } from '../../../utils/function';
import { newHistoryChat } from '../../../actions/chatAction';
import {
  newChatOnChange,
} from '../../../actions/formAction';

function Form() {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const stateChat = useSelector((state) => state.chat);
  const inputChat = useSelector((state) => state.form.inputChat);
  const user = useSelector((state) => state.form.user);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      newHistoryChat({
        id: getNewId(stateChat),
        content: inputChat,
        user: user,
      }),
    );
  };
  const handleChange = (event) => {
    dispatch(newChatOnChange(event.target.value));
  };

  return (
    <div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <TextField
          ref={inputEl}
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
}

export default Form;
