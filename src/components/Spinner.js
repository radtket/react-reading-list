import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";

const Spinner = ({ style, size = 16 }) => {
  return <CircularProgress {...{ size, style }} />;
};

Spinner.propTypes = {
  size: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

Spinner.defaultProps = {
  size: 16,
  style: null,
};

export default Spinner;
