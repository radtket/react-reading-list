import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ mixins }) => ({
  toolbar: mixins.toolbar,
}));

const ToolbarMixin = () => {
  const { toolbar } = useStyles();

  return <div className={toolbar} />;
};

export default ToolbarMixin;
