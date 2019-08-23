import "./bootstrap";
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
