// == Import

import { StrictMode } from "react";
import SettingsMenu from "./Settings/Settings";

import ContainerChat from "./ContainerChat/ContainerChat";
import Form from "./Form/Form";
import "./styles.scss";
import { Container } from "@mui/material";

// == Composant
function App() {
  return (
    <div className="app">
      <Container maxWidth="md">
        <SettingsMenu />
        <ContainerChat />
        <Form />
      </Container>
    </div>
  );
}

// == Export
export default App;
