import React from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme"; // Assuming you've moved the theme to a separate file

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
