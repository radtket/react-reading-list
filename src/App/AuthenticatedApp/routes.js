import React from "react";
import { Router, Redirect } from "@reach/router";

// Context
import { ListItemProvider } from "../../context/list-item-context";

// Pages
import BookScreen from "./pages/BookScreen";
import DiscoverBooksScreen from "./pages/DiscoverBooksScreen";
import FinishedBooksScreen from "./pages/FinishedScreen";
import NotFound from "./pages/NotFound";
import ReadingListScreen from "./pages/ReadingListScreen";

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
