import React from "react";
import { CircularProgress } from "@material-ui/core";

const Spinner = ({ style, size = 16 }) => {
  return <CircularProgress {...{ size, style }} />;
};

export default Spinner;
