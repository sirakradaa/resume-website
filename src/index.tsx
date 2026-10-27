import React from "react";
import ReactDOM from "react-dom";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme"; // Assuming you've moved the theme to a separate file

const COLOR_MODE_KEY = "chakra-ui-color-mode";
const NIGHT_DEFAULT_KEY = "sirak-night-default";

try {
  if (!localStorage.getItem(NIGHT_DEFAULT_KEY)) {
    localStorage.setItem(COLOR_MODE_KEY, "dark");
    localStorage.setItem(NIGHT_DEFAULT_KEY, "1");
  }
} catch {
  // Private browsing can block storage. The theme still starts in night mode.
}

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
