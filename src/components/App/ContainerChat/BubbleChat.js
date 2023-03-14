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

function BubbleChat({ author, content, date, alignment, styleFormat }) {
  // console.log(content);
  const user = useSelector(getUser);
  const formState = useSelector(({ form }) => form);

  console.log(date);
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
        <Avatar
          sx={{ marginRight: '0.5rem', width: 56, height: 56 }}
          variant="rounded"
          src={formState.avatar}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '0.5rem',
            padding: '0.1rem',
          }}
        >
          <Divider sx={{ marginRight: '0.3rem' }} orientation="vertical" flexItem />
          <p className={user === author ? 'container-user--me' : 'container-user--other'}>
            {' '}
            {author ? author : 'Anne Onyme'}{' '}
          </p>
          <p className="date">{date}</p>
          <div
            style={{
              borderRadius: '0.5rem',
              display: 'flex',
            }}
          >
            <p className="tags">#tagColor</p>
            <span
              style={{
                backgroundColor: formState.color,
                width: 'max-content',
                height: '10px',
                color: formState.color,
              }}
            >
              ^
            </span>
          </div>
        </section>
        <section className="content">
          <p
            style={{
              textAlignLast: `${alignment}`,
              font: `${styleFormat} 16px/2 sans-serif`,
              letterSpacing: 2,
            }}
          >
            {' '}
            {content}{' '}
          </p>
        </section>
      </Box>
    </Box>
  );
}

BubbleChat.propTypes = {
  author: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default BubbleChat;
