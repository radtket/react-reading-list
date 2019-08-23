import React from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";

import { Router, Redirect } from "@reach/router";
import { ListItemProvider } from "../../context/list-item-context";
import ReadingListScreen from "../../screens/ReadingListScreen";
import FinishedBooksScreen from "../../screens/FinishedScreen";
import DiscoverBooksScreen from "../../screens/DiscoverBooksScreen";
import BookScreen from "../../screens/BookScreen";
import NotFound from "../../screens/NotFound";

const RedirectHome = () => {
  return <Redirect to="/list" />;
};

const Routes = () => {
  return (
    <ListItemProvider>
      <Router>
        <RedirectHome path="/" />
        <ReadingListScreen path="/list" />
        <FinishedBooksScreen path="/finished" />
        <DiscoverBooksScreen path="/discover" />
        <BookScreen path="/book/:bookId" />
        <NotFound default />
      </Router>
    </ListItemProvider>
  );
};

export default Routes;
