/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import './form.scss';
import { useEffect, useRef, useState } from 'react';
import { Box, FormControl, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getNewId } from '../../../utils/function';
import { newHistoryChat } from '../../../actions/chatAction';
import { newChatOnChange } from '../../../actions/formAction';
import ToolsBar from '../../mui/ToolsBar';
import { getAllMessages } from '../../../selectors/functions';

function Form() {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(getAllMessages);
  const [inputChat, setInputChat] = useState('');
  const user = useSelector(({ form }) => form.user);
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['italic']);
  const textDecoration = formats.map((format) => (format ? ` "${format}"` : undefined));
  const textDecorationString = textDecoration.toString();
  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      newHistoryChat({
        id: getNewId(messages),
        content: inputChat,
        user: user,
      }),
    );
    setInputChat('');
  };

  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      <ToolsBar
        sx={{ margin: '1rem' }}
        alignment={alignment}
        formats={formats}
        setFormats={setFormats}
        setAlignment={setAlignment}
      />
      <input
        style={{ textAlignLast: `${alignment}` }}
        ref={inputEl}
        id="standard-basic"
        label={user}
        className="form-input"
        size="medium"
        type="text"
        value={inputChat}
        onChange={(event) => {
          setInputChat(event.target.value);
        }}
      />
    </form>
  );
}

export default Form;
