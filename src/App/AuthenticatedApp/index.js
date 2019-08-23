import React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import * as mq from "../../styles/media-queries";
import { useAuth } from "../../context/auth-context";
import { useUser } from "../../context/user-context";
import Routes from "./routes";
import Nav from "./Nav";

const AuthenticatedApp = () => {
  const user = useUser();
  const { logout } = useAuth();
  return (
    <div
      css={{
        margin: "0 auto",
        padding: "2em 0",
        maxWidth: "840px",
        width: "100%",
        display: "grid",
        gridGap: "1em",
        gridTemplateColumns: "3fr 9fr",
        [mq.small]: {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
          width: "100%",
          padding: "2em 1em",
        },
      }}
    >
      <div>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          {user.username}
          <button
            css={{
              marginLeft: "10px",
            }}
            onClick={logout}
            type="button"
          >
            Logout
          </button>
        </div>
        <Nav />
      </div>
      <main css={{ width: "100%" }}>
        <Routes />
      </main>
      <footer />
    </div>
  );
};

export default AuthenticatedApp;
