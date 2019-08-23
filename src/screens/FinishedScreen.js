/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Link } from "@reach/router";
import ListItemList from "../components/ListItemList";

const FinishedScreen = () => {
  return (
    <ListItemList
      filterListItems={li => Boolean(li.finishDate)}
      noFilteredListItems={
        <p>
          Looks like you've got some reading to do! Check them out in your{" "}
          <Link to="/list">reading list</Link> or{" "}
          <Link to="/discover">discover more</Link>.
        </p>
      }
      noListItems={
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to{" "}
          <Link to="/discover">the Discover page</Link> to add books to your
          list.
        </p>
      }
    />
  );
};

export default FinishedScreen;
