/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import { Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./chat.scss";
import { PropTypes } from "prop-types";
import { Avatar, Box, Divider } from "@mui/material";

function BubbleChat({ user, content }) {
  // console.log(content);

  const date = new Date();
  return (

    <Box sx={{ display: "flex", paddingTop: "1rem", paddingLeft: "0.5rem" }}>
      <Box>
        <Avatar sx={{ marginRight: "0.3rem" }} variant="rounded">
          {user.charAt[0]}
        </Avatar>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }} >
        <section style={{display: "flex", flexDirection: "row"}}>
          <Divider sx={{ marginRight: "0.3rem" }} orientation="vertical" flexItem />
          <p className="container-user"> {user ? user : "no-user"} </p>
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
  user: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,

};

export default BubbleChat;
