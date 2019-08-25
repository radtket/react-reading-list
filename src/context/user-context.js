import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

// Context
import { useAuth } from "./auth-context";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const {
    data: { user },
  } = useAuth();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, useUser };
