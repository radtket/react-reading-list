import React from "react";
import PropTypes from "prop-types";
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

FullPageSpinner.propTypes = {
  size: PropTypes.number,
};

FullPageSpinner.defaultProps = {
  size: 48,
};

export default FullPageSpinner;
