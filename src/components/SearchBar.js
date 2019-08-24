import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import ErrorMessage from "./ErrorMessage";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
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
            css={{ width: "100%" }}
            id="search"
            onChange={handleInputChange}
            placeholder="Search books..."
          />
          <Tooltip label="Search Books">
            <label htmlFor="search">
              <button
                css={{
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
                    <FaTimes aria-label="error" css={{ color: "red" }} />
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

export default SearchBar;
