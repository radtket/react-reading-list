import React, {
  useState,
  useContext,
  createContext,
  useLayoutEffect,
} from "react";
import PropTypes from "prop-types";
import { useAsync } from "react-async";

// Components
// import { ErrorMessage, FullPageSpinner } from "../components";
import ErrorMessage from "../components/ErrorMessage";
import FullPageSpinner from "../components/FullPageSpinner";

// Utils
import bootstrapAppData from "../utils/bootstrapAppData";
import { login, register, logout } from "../utils/auth-client";

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
      return <ErrorMessage {...{ error }} />;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        data,
        login: form => login(form).then(reload),
        logout: () => logout().then(reload),
        register: form => register(form).then(reload),
      }}
    >
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
