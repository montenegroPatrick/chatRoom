/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
import { Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./chat.scss";
import { PropTypes } from "prop-types";

function BubbleChat({ user, content }) {
  // console.log(content);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width: "fit-content",
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  return (
    <Stack spacing={2}>
      <Item className="container-user">{user}</Item>
      <Item className="container-content">{content}</Item>
    </Stack>
  );
}

BubbleChat.propTypes = {
  user: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,

};

export default BubbleChat;
