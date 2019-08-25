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
  const classes = useStyles();

  return (
    <>
      <form onSubmit={handleSearchClick}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            inputProps={{ "aria-label": "search google maps" }}
            onChange={handleInputChange}
            placeholder="Search books..."
          />
          <Tooltip title="Search Books">
            <IconButton
              aria-label="Search Books"
              className={classes.iconButton}
              type="submit"
            >
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Paper>
      </form>
      {isRejected && <ErrorMessage {...{ error }} />}
      {/* <form onSubmit={handleSearchClick}>
          <input
            style={{ width: "100%" }}
            id="search"
            onChange={handleInputChange}
            placeholder="Search books..."
          />
          <Tooltip label="Search Books">
            <label htmlFor="search">
              <button
                style={{
                  border: "0",
                  position: "relative",
                  marginLeft: "-35px",
                  background: "transparent",
                }}
                type="submit"
              >
                {isPending && <Spinner />}
                {!isPending &&
                  (isRejected ? (
                    <FaTimes aria-label="error" style={{ color: "red" }} />
                  ) : (
                    <FaSearch aria-label="search" />
                  ))}
              </button>
            </label>
          </Tooltip>
        </form> */}
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
