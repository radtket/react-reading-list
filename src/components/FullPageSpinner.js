import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

const FullPageSpinner = ({ size = 48 }) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      height="calc(100vh - 80px)"
      justifyContent="center"
    >
      <CircularProgress {...{ size }} />
    </Box>
  );
};

export default FullPageSpinner;
