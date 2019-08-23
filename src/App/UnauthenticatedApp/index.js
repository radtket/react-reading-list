import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import Logo from "../../components/Logo";
import { useAuth } from "../../context/auth-context";

// Components
import Modal from "./Modal";
import LoginForm from "./LoginForm";

const UnauthenticatedApp = () => {
  const { login, register } = useAuth();
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100%"
    >
      <Logo height="80" width="80" />
      <Typography gutterBottom variant="h4">
        Bookshelf
      </Typography>
      <Box display="flex">
        <Modal
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
        >
          <LoginForm buttonText="Login" onSubmit={login} />
        </Modal>
        <Modal button={<Button>Register</Button>}>
          <LoginForm buttonText="Register" onSubmit={register} />
        </Modal>
      </Box>
    </Box>
  );
};

export default UnauthenticatedApp;
