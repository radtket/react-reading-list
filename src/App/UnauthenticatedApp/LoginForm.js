import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, TextField } from "@material-ui/core";

import Spinner from "../../components/Spinner";
import useCallbackStatus from "../../utils/use-callback-status";

const LoginForm = ({ onSubmit, buttonText }) => {
  const { isPending, isRejected, error, run } = useCallbackStatus();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <Typography align="center" gutterBottom variant="h5">
        {buttonText}
      </Typography>
      <Box
        alignItems="stretch"
        component="form"
        display="flex"
        flexDirection="column"
        onSubmit={e => {
          e.preventDefault();
          run(
            onSubmit({
              ...values,
            })
          );
        }}
      >
        <TextField
          label="Username"
          onChange={handleChange("username")}
          value={values.username}
        />

        <TextField
          label="Password"
          onChange={handleChange("password")}
          value={values.password}
        />
        <Box my={2}>
          <Button color="primary" type="submit" variant="contained">
            {buttonText} {isPending && <Spinner style={{ marginLeft: 5 }} />}
          </Button>
        </Box>
        {isRejected && (
          <Typography color="error" variant="overline">
            {error && error.message}
          </Typography>
        )}
      </Box>
    </>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default LoginForm;
