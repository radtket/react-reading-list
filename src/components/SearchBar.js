import React from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Tooltip,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// Components
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    // width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

const SearchBar = ({
  handleInputChange,
  handleSearchClick,
  isPending,
  isRejected,
  // eslint-disable-next-line react/prop-types
  error,
}) => {
  const { root, input, iconButton } = useStyles();

  return (
    <>
      <form onSubmit={handleSearchClick}>
        <Paper className={root}>
          <InputBase
            className={input}
            inputProps={{ "aria-label": "search google maps" }}
            onChange={handleInputChange}
            placeholder="Search books..."
          />
          <Tooltip title="Search Books">
            <IconButton
              aria-label="Search Books"
              className={iconButton}
              type="submit"
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </form>
      {isRejected && <ErrorMessage {...{ error }} />}
    </>
  );
};

SearchBar.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  isPending: PropTypes.bool.isRequired,
  isRejected: PropTypes.bool.isRequired,
};

export default SearchBar;
