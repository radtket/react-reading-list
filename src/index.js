import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import { ThemeProvider } from "@material-ui/styles";
import App from "./app";
import AppProviders from "./context";

const theme = {};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppProviders>
      <App />
    </AppProviders>
  </ThemeProvider>,
  document.getElementById("root")
);
