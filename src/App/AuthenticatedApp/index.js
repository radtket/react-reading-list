import React from "react";

// Material UI
import { Box, makeStyles } from "@material-ui/core";

// Components
import Navbar from "./Navbar";
import Routes from "../routes";

const useStyles = makeStyles(({ mixins, palette, spacing }) => ({
  toolbar: mixins.toolbar,
  content: {
    backgroundColor: palette.background.default,
    flexGrow: 1,
    padding: spacing(3),
  },
}));

const AuthenticatedApp = () => {
  const { toolbar, content } = useStyles();

  return (
    <Box display="flex">
      <Navbar toolbar={toolbar} />
      <main className={content}>
        <div className={toolbar} />
        <Routes />
      </main>
    </Box>
  );
};

export default AuthenticatedApp;
