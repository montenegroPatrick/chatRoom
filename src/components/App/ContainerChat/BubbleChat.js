import { Stack } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "./chat.scss";

const BubbleChat = ({ user, content }) => {
  console.log(content);
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
};

export default BubbleChat;
