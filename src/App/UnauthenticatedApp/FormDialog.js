import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

// Components
import { Spinner } from "../../components";

import useCallbackStatus from "../../utils/use-callback-status";
import { slugify } from "../../utils/helpers";

const FormDialog = ({ button, buttonText, handleSubmit }) => {
  const { isPending, isRejected, error, run } = useCallbackStatus();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {cloneElement(button, { onClick: () => setOpen(true) })}
      <Dialog
        aria-labelledby={slugify(`${buttonText} Form Title`)}
        fullWidth
        maxWidth="xs"
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id={slugify(`${buttonText} Form Title`)}>
          {buttonText}
        </DialogTitle>

        <DialogContent>
          {isRejected && (
            <DialogContentText color="error">
              {error && error.message}
            </DialogContentText>
          )}
          <Box
            alignItems="stretch"
            component="form"
            display="flex"
            flexDirection="column"
            onSubmit={e => {
              e.preventDefault();
              run(
                handleSubmit({
                  ...values,
                })
              );
            }}
          >
            <TextField
              autoFocus
              fullWidth
              label="Username"
              margin="normal"
              onChange={handleChange("username")}
              value={values.username}
            />

            <TextField
              autoFocus
              fullWidth
              label="Password"
              margin="normal"
              onChange={handleChange("password")}
              value={values.password}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={e => {
              e.preventDefault();
              run(
                handleSubmit({
                  ...values,
                })
              );
            }}
            type="submit"
          >
            {buttonText} {isPending && <Spinner style={{ marginLeft: 5 }} />}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

FormDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  button: PropTypes.node.isRequired,
};

export default FormDialog;
