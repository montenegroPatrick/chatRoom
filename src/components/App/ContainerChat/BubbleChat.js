/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import { Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./chat.scss";
import { PropTypes } from "prop-types";
import { Box, Divider, p } from "@mui/material";

function BubbleChat({ user, content }) {
  // console.log(content);

  const date = new Date();
  return (
    <>
      <Box className=""sx={{ display: "flex", padding: "1rem" }}>
        <p className="container-user">{user ? user : "no-user"}</p>
        <p className="date">{`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`}</p>
      </Box>
      <p className="content">{content}</p>
    </>
  );
}

BubbleChat.propTypes = {
  user: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,

};

export default BubbleChat;
