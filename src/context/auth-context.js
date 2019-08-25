import React, {
  useState,
  useContext,
  createContext,
  useLayoutEffect,
} from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { useAsync } from "react-async";

// Components
import FullPageSpinner from "../components/FullPageSpinner";

// Utils
import bootstrapAppData from "../utils/bootstrapAppData";
import * as authClient from "../utils/auth-client";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider value={{ data, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
