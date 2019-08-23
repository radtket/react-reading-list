import React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import styled from "@emotion/styled";
import { Link } from "@reach/router";
import * as mq from "../../styles/media-queries";
import * as colors from "../../styles/colors";

const NavLink = styled(Link)({
  display: "block",
  padding: "8px 15px 8px 10px",
  margin: "5px 0",
  width: "100%",
  height: "100%",
  color: colors.text,
  borderRadius: "2px",
  borderLeft: "5px solid transparent",
  ":hover": {
    color: colors.indigo,
    textDecoration: "none",
    background: colors.gray10,
  },
});

const Nav = () => {
  return (
    <nav
      css={{
        position: "sticky",
        top: "2em",
        padding: "3em 1.5em",
        border: `1px solid ${colors.gray10}`,
        borderRadius: "3px",
        [mq.small]: {
          padding: "0.5em 1em",
          position: "static",
        },
      }}
    >
      <ul
        css={{
          listStyle: "none",
          padding: "0",
          '& [aria-current="page"]': {
            borderLeft: `5px solid ${colors.indigo}`,
            background: colors.gray10,
            ":hover": {
              background: colors.gray10,
            },
          },
        }}
      >
        <li>
          <NavLink to="/list">Reading List</NavLink>
        </li>
        <li>
          <NavLink to="/finished">Finished Books</NavLink>
        </li>
        <li>
          <NavLink to="/discover">Discover</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
