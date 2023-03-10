import { Emoji } from 'emoji-picker-react';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Box } from '@mui/system';
import './muiStyles.scss';
import { Menu } from '@mui/material';

export default function StandaloneToggleButton({ children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const openAnchor = Boolean(anchorEl);
  return (
    <>
      <Box>
        <ToggleButton
          value="check"
          selected={selected}
          onClick={(event) => {
            setOpen(!open);
            setAnchorEl(event.currentTarget);
          }}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <Emoji unified="1f423" size="25" />
        </ToggleButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="emoji-menu"
        open={openAnchor}
        onClose={() => {
          setAnchorEl(null);
        }}
        PaperProps={{
          elevation: 10,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            marginRight: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 18,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',

              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        {children}
      </Menu>
    </>
  );
}

StandaloneToggleButton.propTypes = {
  children: PropTypes.node.isRequired,
};
