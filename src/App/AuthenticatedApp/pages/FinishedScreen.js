import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "@reach/router";

// Components
import {
  // ErrorMessage,
  ListItemList,
} from "../../../components";

const FinishedScreen = () => {
  return (
    <ListItemList
      filterListItems={li => Boolean(li.finishDate)}
      noFilteredListItems={
        <Typography gutterBottom variant="body1">
          Looks like you've got some reading to do! Check them out in your{" "}
          <Link to="/list">reading list</Link> or{" "}
          <Link to="/discover">discover more</Link>.
        </Typography>
      }
      noListItems={
        <Typography gutterBottom variant="body1">
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to{" "}
          <Link to="/discover">the Discover page</Link> to add books to your
          list.
        </Typography>
      }
    />
  );
};

export default FinishedScreen;
