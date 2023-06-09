/* eslint-disable quotes */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import './form.scss';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewId } from '../../../utils/function';
import { newHistoryChat } from '../../../actions/chatAction';
import ToolsBar from '../../mui/ToolsBar';
import { getAllMessages, getLogin, getUser } from '../../../selectors/functions';
import AlertDialogSlide from '../../mui/Modal';
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';
import StandaloneToggleButton from '../../mui/ToolTip';
import { typography } from '@mui/system';

function Form() {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(getAllMessages);
  const [inputChat, setInputChat] = useState('');
  const user = useSelector(getUser);
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['italic']);
  const formatStyle = formats.map((element) => element);
  const styleFormat = formatStyle.toString().replaceAll(',', ' ');
  console.log(styleFormat);
  const login = useSelector(getLogin);

  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const date = new Date();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user !== '') {
      dispatch(
        newHistoryChat({
          content: inputChat,
          user: user,
          styleFormat,
          alignment,
          date: `${date.getHours()}h:${
            date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
          }, ${date.toDateString()}`,
        }),
      );
    }
    setInputChat('');
  };
  const onEmojiClick = (emojiData) => {
    setInputChat(`${inputChat}${emojiData.emoji}`);
  };

  return (
    <form className="form" action="" onSubmit={handleSubmit}>
      {user === '' && (
        <AlertDialogSlide
          inputChat={inputChat}
          login={login}
          content="BOU, vous devez vous connecter"
          title="vous êtes déconnecté"
        />
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ToolsBar
          sx={{ margin: '1rem' }}
          alignment={alignment}
          formats={formats}
          setFormats={setFormats}
          setAlignment={setAlignment}
        />
        <StandaloneToggleButton>
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </StandaloneToggleButton>
      </Box>
      <input
        autoComplete="off"
        style={{
          textAlignLast: `${alignment}`,
          font: `${styleFormat} 16px/2 sans-serif`,
          letterSpacing: 2,
        }}
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
