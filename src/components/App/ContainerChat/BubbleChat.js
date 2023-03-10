/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './chat.scss';
import { PropTypes } from 'prop-types';
import { Avatar, Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { getUser } from '../../../selectors/functions';

function BubbleChat({ author, content }) {
  // console.log(content);
  const user = useSelector(getUser);
  const date = new Date();
  return (
    <Box
      className="message"
      sx={{
        display: 'flex',
        paddingTop: '1rem',
        paddingLeft: '0.5rem',
        borderBottom: '1px, solid, grey',
        borderRadius: '1rem',
      }}
    >
      <Box>
        <Avatar sx={{ marginRight: '0.3rem' }} variant="rounded">
          {author.charAt[0]}
        </Avatar>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <section style={{ display: 'flex', flexDirection: 'row' }}>
          <Divider sx={{ marginRight: '0.3rem' }} orientation="vertical" flexItem />
          <p className={user === author ? 'container-user--me' : 'container-user--other'}>
            {' '}
            {author ? author : 'Anne Onyme'}{' '}
          </p>
          <p className="date">{`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`}</p>
        </section>
        <section className="content">
          <p> {content} </p>
        </section>
      </Box>
    </Box>
  );
}

BubbleChat.propTypes = {
  author: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default BubbleChat;
