// Styles
import "./hacks";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "@reach/dialog/styles.css";
import "@reach/menu-button/styles.css";
import "@reach/tabs/styles.css";
import "@reach/tooltip/styles.css";
import "./styles/global.css";

// App
import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import App from "./App";
import AppProviders from "./context";

const theme = createMuiTheme({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppProviders>
      <App />
    </AppProviders>
  </ThemeProvider>,
  document.getElementById("root")
);
