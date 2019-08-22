/** @jsx jsx */
import { jsx } from "@emotion/core";

import styled from "@emotion/styled";
import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog } from "@reach/dialog";
import Logo from "./components/logo";
import {
  CircleButton,
  Button,
  Spinner,
  FormGroup,
  Centered,
} from "./components/lib";
import { useAuth } from "./context/auth-context";
import useCallbackStatus from "./utils/use-callback-status";

function LoginForm({ onSubmit, buttonText }) {
  const { isPending, isRejected, error, run } = useCallbackStatus();
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    run(
      onSubmit({
        username: username.value,
        password: password.value,
      })
    );
  }

  return (
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
      onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </FormGroup>
      <div>
        <Button type="submit">
          {buttonText} {isPending ? <Spinner css={{ marginLeft: 5 }} /> : null}
        </Button>
      </div>
      {isRejected ? (
        <div css={{ color: "red" }}>{error ? error.message : null}</div>
      ) : null}
    </form>
  );
}

function Modal({ button, children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {React.cloneElement(button, { onClick: () => setIsOpen(true) })}
      <Dialog isOpen={isOpen}>
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <CircleButton onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        {children}
      </Dialog>
    </>
  );
}

const ModalTitle = styled.h3({
  textAlign: "center",
  fontSize: "2em",
});

function UnauthenticatedApp() {
  const { login, register } = useAuth();

  return (
    <Centered>
      <Logo height="80" width="80" />
      <h1>Bookshelf</h1>
      <div css={{ display: "flex" }}>
        <Modal button={<Button css={{ marginRight: 6 }}>Login</Button>}>
          <ModalTitle>Login</ModalTitle>
          <LoginForm buttonText="Login" onSubmit={login} />
        </Modal>
        <Modal button={<Button variant="secondary">Register</Button>}>
          <ModalTitle>Register</ModalTitle>
          <LoginForm buttonText="Register" onSubmit={register} />
        </Modal>
      </div>
    </Centered>
  );
}

export default UnauthenticatedApp;
