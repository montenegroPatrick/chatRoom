// == Import

import { StrictMode } from "react";
import SettingsMenu from "./Settings/Settings";

import ContainerChat from "./ContainerChat/ContainerChat";
import Form from "./Form/Form";
import "./styles.scss";

// == Composant
function App() {
  return (
    <div className="app">
      <SettingsMenu />
      <ContainerChat />
      <Form />
    </div>
  );
}

// == Export
export default App;
