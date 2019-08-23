import React from "react";
import { Box, Container, Button, Typography } from "@material-ui/core";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/auth-context";

// Components
import FormDialog from "./FormDialog";

const UnauthenticatedApp = () => {
  const { login, register } = useAuth();
  return (
    <Box
      alignItems="center"
      components={Container}
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      textAlign="center"
    >
      <Logo height="80" width="80" />
      <Typography gutterBottom variant="h4">
        Bookshelf
      </Typography>
      <Box display="flex">
        {/* Login */}
        <FormDialog
          button={
            <Button
              color="primary"
              style={{
                marginRight: 6,
              }}
              variant="contained"
            >
              Login
            </Button>
          }
          buttonText="Login"
          handleSubmit={login}
        />
        {/* Register */}
        <FormDialog
          button={<Button>Register</Button>}
          buttonText="Register"
          handleSubmit={register}
        />
      </Box>
    </Box>
  );
};

export default UnauthenticatedApp;
