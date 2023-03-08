import { Button } from '@mui/material';
import './Logout.scss';
import { PropTypes } from 'prop-types';

function Logout({ user, handleLogout }) {
  return (
    <div className="logout">
      <div />
      <div className="logout-text-button">
        <p className="logout-text">Hey {user}</p>
        <Button variant="contained" disableElevation onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
Logout.propTypes = {
  user: PropTypes.string.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Logout;
