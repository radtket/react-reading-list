import React from "react";
import { Box } from "@material-ui/core";
import Spinner from "./Spinner";

const FullPageSpinner = () => {
  return (
    <Box fontSize="4em" marginTop="3em">
      <Spinner />
    </Box>
  );
};

export default FullPageSpinner;
