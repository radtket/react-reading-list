import React from "react";
import { Router, Redirect } from "@reach/router";

// Context
import { ListItemProvider } from "../context/list-item-context";

// Pages
import BookScreen from "./AuthenticatedApp/pages/BookScreen";
import DiscoverBooksScreen from "./AuthenticatedApp/pages/DiscoverBooksScreen";
import FinishedBooksScreen from "./AuthenticatedApp/pages/FinishedScreen";
import NotFound from "./AuthenticatedApp/pages/NotFound";
import ReadingListScreen from "./AuthenticatedApp/pages/ReadingListScreen";

const RedirectHome = () => {
  return <Redirect to="/list" />;
};

const Routes = () => {
  return (
    <ListItemProvider>
      <Router>
        <RedirectHome path="/" />
        <BookScreen path="/book/:bookId" />
        <DiscoverBooksScreen path="/discover" />
        <FinishedBooksScreen path="/finished" />
        <ReadingListScreen path="/list" />
        <NotFound default />
      </Router>
    </ListItemProvider>
  );
};

export default Routes;
