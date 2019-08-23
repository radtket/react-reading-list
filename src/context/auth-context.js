/* eslint-disable react/no-unescaped-entities */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import React, {
  useState,
  useContext,
  createContext,
  useLayoutEffect,
} from "react";
import { Box, Typography } from "@material-ui/core";
import { useAsync } from "react-async";
import bootstrapAppData from "../utils/bootstrapAppData";
import * as authClient from "../utils/auth-client";
import FullPageSpinner from "../components/FullPageSpinner";

const AuthContext = createContext();

const AuthProvider = props => {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const {
    data = { user: null, listItems: [] },
    error,
    isRejected,
    isPending,
    isSettled,
    reload,
  } = useAsync({
    promiseFn: bootstrapAppData,
  });

  useLayoutEffect(() => {
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />;
    }
    if (isRejected) {
      return (
        <Box color="text.error">
          <Typography color="error" display="block" gutterBottom>
            Uh oh... There's a problem. Try refreshing the app.
          </Typography>
          <pre>{error.message}</pre>
        </Box>
      );
    }
  }

  const login = form => authClient.login(form).then(reload);
  const register = form => authClient.register(form).then(reload);
  const logout = () => authClient.logout().then(reload);

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
