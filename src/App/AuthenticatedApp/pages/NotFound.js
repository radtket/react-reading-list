import React from "react";
import { Box, Container, Link, Typography } from "@material-ui/core";
import { Link as MuiLink } from "@reach/router";

const NotFound = () => (
  <Box
    alignItems="center"
    components={Container}
    display="flex"
    flexDirection="column"
    height="100vh"
    justifyContent="center"
    textAlign="center"
  >
    <Typography gutterBottom variant="h6">
      Sorry... nothing here.
    </Typography>
    <Link component={MuiLink} to="/" variant="body1">
      Go home
    </Link>
  </Box>
);

export default NotFound;
