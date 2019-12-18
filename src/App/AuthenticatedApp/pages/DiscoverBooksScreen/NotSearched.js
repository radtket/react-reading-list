import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { Spinner } from "../../../../components";

const NotSearched = ({ isPending, isResolved, noBooksFound }) => {
  return (
    <Box mt={3} textAlign="center">
      <Typography variant="body1">Welcome to the discover page.</Typography>
      <Typography variant="body1">
        Here, let me load a few books for you...
      </Typography>

      {isPending && (
        <Box m="auto" width={1}>
          <Spinner />
        </Box>
      )}

      {isResolved && (
        <Typography>
          {!noBooksFound
            ? "Here you go! Find more books with the search bar above."
            : "Hmmm... I couldn't find any books to suggest for you. Sorry."}
        </Typography>
      )}
    </Box>
  );
};

NotSearched.propTypes = {
  isPending: PropTypes.bool.isRequired,
  isResolved: PropTypes.bool.isRequired,
  noBooksFound: PropTypes.bool.isRequired,
};

export default NotSearched;
