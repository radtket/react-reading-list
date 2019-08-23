import React, { useState } from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Typography, Button, TextField } from "@material-ui/core";

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
      <form
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          "> div": {
            margin: "10px auto",
            width: "100%",
            maxWidth: "300px",
          },
        }}
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
        <div>
          <Button color="primary" type="submit" variant="contained">
            {buttonText} {isPending && <Spinner css={{ marginLeft: 5 }} />}
          </Button>
        </div>
        {isRejected && (
          <div css={{ color: "red" }}>{error && error.message}</div>
        )}
      </form>
    </>
  );
};

export default LoginForm;
