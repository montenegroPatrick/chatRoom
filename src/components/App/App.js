/* eslint-disable quotes */
// == Import

import { StrictMode } from "react";
import SettingsMenu from "./Settings/Settings";

import ContainerChat from "./ContainerChat/ContainerChat";
import Form from "./Form/Form";
import "./styles.scss";
import { Container, Box } from "@mui/material";

// == Composant
function App() {
  return (
    <div className="app">
      <Box>
        <SettingsMenu />
      </Box>
      <Container maxWidth="md">
        <ContainerChat />
        <Form />
      </Container>
    </div>
  );
}

// == Export
export default App;
