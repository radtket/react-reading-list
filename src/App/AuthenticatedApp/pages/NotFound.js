import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as MuiLink } from "@reach/router";

const NotFound = () => {
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
      <Typography gutterBottom variant="h6">
        Sorry... nothing here.
      </Typography>
      <Link component={MuiLink} to="/" variant="body1">
        Go home
      </Link>
    </Box>
  );
};

export default NotFound;
