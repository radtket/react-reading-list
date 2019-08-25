import React from "react";
import PropTypes from "prop-types";

// Context
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
