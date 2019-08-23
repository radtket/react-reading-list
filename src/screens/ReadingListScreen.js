/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link } from "@reach/router";
import ListItemList from "../components/ListItemList";

const ReadingListScreen = () => {
  return (
    <ListItemList
      filterListItems={li => !li.finishDate}
      noFilteredListItems={
        <p>
          Looks like you've finished all your books! Check them out in your{" "}
          <Link to="/finished">finished books</Link> or{" "}
          <Link to="/discover">discover more</Link>.
        </p>
      }
      noListItems={
        <p>
          Hey there! Welcome to your bookshelf reading list. Get started by
          heading over to <Link to="/discover">the Discover page</Link> to add
          books to your list.
        </p>
      }
    />
  );
};

export default ReadingListScreen;
