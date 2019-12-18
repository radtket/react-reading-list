import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";

// Components
import {
  // ErrorMessage,
  ListItemList,
} from "../../../components";

const ReadingListScreen = () => (
  <ListItemList
    filterListItems={li => !li.finishDate}
    noFilteredListItems={
      <Typography gutterBottom variant="body1">
        Looks like you've finished all your books! Check them out in your{" "}
        <Link to="/finished">finished books</Link> or{" "}
        <Link to="/discover">discover more</Link>.
      </Typography>
    }
    noListItems={
      <Typography gutterBottom variant="body1">
        Hey there! Welcome to your bookshelf reading list. Get started by
        heading over to <Link to="/discover">the Discover page</Link> to add
        books to your list.
      </Typography>
    }
  />
);

export default ReadingListScreen;
