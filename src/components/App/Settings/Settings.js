/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  Button,
  TextField,
  ListItem,
  ListItemText,
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,

} from "@mui/material";
import './Settings.scss';
import { Box } from '@mui/system';
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { newConnexion } from "../../../actions/formAction";
import { checkEmail, checkPassword } from "../../../utils/function.js";

function SettingsMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userConnexion, setUserConnexion] = useState("");
  const [emailValidator, setEmailValidator] = useState("");
  const [password, setPassword] = useState('');
  const open = Boolean(anchorEl);
  const [errorList, setErrorList] = useState([]);
  const [glitch, setGlitch] = useState(false);
  const initialMount = useRef(true);
  const passwordField = useRef(null);
  console.log(glitch);
  console.log(!!emailValidator);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = (event) => {
    if (errorList.length > 0 || !!emailValidator) {
      setTimeout(() => {
        setGlitch(true);
      }, 10);
      setGlitch(false);
    }
    else {
      event.preventDefault();
      dispatch(newConnexion({
        user: userConnexion,
        password: password,
      }));
      setUserConnexion('');
      setPassword('');
    }
  };
  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
    }
  }, []);

  useEffect(() => {
    if (password === "" && userConnexion === "") {
      setEmailValidator(false);
      setErrorList([]);
    }
    else {
      const errorEmail = checkEmail(userConnexion);
      setEmailValidator(errorEmail);
      const errorArray = checkPassword(password);
      setErrorList([...errorArray]);
    }
  }, [password, userConnexion]);
  return (
    <div
      style={{ display: "flex", justifyContent: "right", marginRight: "2rem" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          position: "fixed",
        }}
      >
        <Tooltip title="Connexion">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}> + </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {errorList.length > 0
            && (
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ marginLeft: "0.5rem", textDecoration: "underline", animation: glitch ? "myAnim 2s ease 0s 1 normal forwards" : "" }}>Errors</Typography>
                </AccordionSummary>
                <Box
                  sx={{
                    display: "flex", flexDirection: "column", color: "red", marginLeft: "0.5rem",
                  }}
                >
                  {errorList.map((error) => (
                    <AccordionDetails>
                      <li style={{ fontSize: "0.9rem", textAlign: "justify" }}>{error}</li>
                    </AccordionDetails>
                  ))}
                </Box>

              </Accordion>

            )}
          <MenuItem>
            <TextField
              id="outlined-textarea"
              label="email"
              placeholder="Placeholder"
              type="email"
              value={userConnexion}
              error={!!emailValidator}
              onChange={(event) => setUserConnexion(event.target.value)}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              ref={passwordField}
              id="outlined-password-input"
              type="password"
              label="Password"
              placeholder="Placeholder"
              value={password}
              error={errorList.length > 0}
              onChange={(event) => setPassword(event.target.value)}
            />
          </MenuItem>
          <MenuItem>
            <Button variant="contained" disableElevation onClick={handleSubmit}>
              Envoyer
            </Button>
          </MenuItem>
          <Divider />
        </Box>
      </Menu>
    </div>
  );
}
export default SettingsMenu;
