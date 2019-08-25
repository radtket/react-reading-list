import React from "react";

import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((errorItem, i) => (
      <Box
        key={errorItem}
        by={2}
        padding={2}
        style={{
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderLeft: "5px solid red",
        }}
      >
        <Typography
          data-test="graphql-error"
          style={{
            margin: 0,
          }}
        >
          <Box component="strong" mr={1}>
            Shoot!
          </Box>
          {errorItem.message.replace("GraphQL error: ", "")}
        </Typography>
      </Box>
    ));
  }
  return (
    <Box
      by={2}
      padding={2}
      style={{
        border: "1px solid rgba(0, 0, 0, 0.05)",
        borderLeft: "5px solid red",
      }}
    >
      <Typography
        data-test="graphql-error"
        style={{
          margin: 0,
        }}
      >
        <Box component="strong" mr={1}>
          Shoot!
        </Box>
        {error.message.replace("GraphQL error: ", "")}
      </Typography>
    </Box>
  );
};

ErrorMessage.defaultProps = {
  error: {},
};

ErrorMessage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.object,
};

export default ErrorMessage;
