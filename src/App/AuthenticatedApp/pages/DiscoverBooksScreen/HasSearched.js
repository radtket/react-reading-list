import React from "react";
import { Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Spinner } from "../../../../components";

const HasSearched = ({ isPending, query }) => {
  if (isPending) {
    return (
      <Box m="auto" width={1}>
        <Spinner />
      </Box>
    );
  }

  return (
    <Typography variant="body1">
      Hmmm... I couldn't find any books with the query "{query}." Please try
      another.
    </Typography>
  );
};

HasSearched.propTypes = {
  isPending: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
};

export default HasSearched;
