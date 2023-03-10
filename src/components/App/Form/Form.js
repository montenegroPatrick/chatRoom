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

function Form() {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const messages = useSelector(getAllMessages);
  const [inputChat, setInputChat] = useState('');
  const user = useSelector(getUser);
  const [alignment, setAlignment] = useState('left');
  const [formats, setFormats] = useState(() => ['italic']);
  const fontStyle = formats.map((format) => ` "${format}"`);
  const fontStyleString = fontStyle.toString();
  const login = useSelector(getLogin);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user !== '') {
      dispatch(
        newHistoryChat({
          content: inputChat,
          user: user,
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
        style={{ textAlignLast: `${alignment}`, fontStyle: `${fontStyleString}` }}
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
