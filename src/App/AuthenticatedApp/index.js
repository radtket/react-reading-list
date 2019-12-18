import React from "react";

// Material UI
import { Box } from "@material-ui/core";

// Components
import Navbar from "./Navbar";
import Routes from "../routes";
import ToolbarMixin from "../../components/ToolbarMixin";

const AuthenticatedApp = () => {
  return (
    <Box display="flex">
      <Navbar />
      <Box
        // Check out if this background is rendering
        backgroundColor="palette.background.default"
        component="main"
        flexGrow={1}
        padding={3}
      >
        <ToolbarMixin />
        <Routes />
      </Box>
    </Box>
  );
};

export default AuthenticatedApp;
