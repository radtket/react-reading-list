import React, { useState } from "react";
import { useAsync } from "react-async";
import { Box, Grid, Typography } from "@material-ui/core";
import * as booksClient from "../../../utils/books-client";

// Components
import {
  BookCardVertical,
  // ErrorMessage,
  SearchBar,
  Spinner,
} from "../../../components";

const initialSearch = () => {
  return booksClient.search("");
};

const DiscoverBooksScreen = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState();
  const { data, isPending, isRejected, isResolved, error, run } = useAsync({
    promiseFn: initialSearch,
    deferFn: booksClient.search,
  });
  const { books } = data || { books: [] };

  const handleInputChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSearchClick = e => {
    e.preventDefault();
    setHasSearched(true);
    run(query);
  };

  return (
    <div>
      <div>
        <SearchBar
          {...{
            handleInputChange,
            handleSearchClick,
            isPending,
            isRejected,
            error,
          }}
        />
      </div>
      <div>
        {!hasSearched && (
          <Box mt={3} textAlign="center">
            <Typography variant="body1">
              Welcome to the discover page.
            </Typography>
            <Typography variant="body1">
              Here, let me load a few books for you...
            </Typography>
            {isPending && (
              <Box m="auto" width={1}>
                <Spinner />
              </Box>
            )}

            {isResolved && (
              <Typography>
                {books.length
                  ? "Here you go! Find more books with the search bar above."
                  : "Hmmm... I couldn't find any books to suggest for you. Sorry."}
              </Typography>
            )}
          </Box>
        )}

        {isResolved && books.length && (
          <Grid container spacing={3}>
            {books.map(book => (
              <Grid key={book.id} item xs={3}>
                <BookCardVertical {...{ book }} />
              </Grid>
            ))}
          </Grid>
        )}

        {isResolved &&
          !books.length &&
          hasSearched &&
          (isPending ? (
            <Box m="auto" width={1}>
              <Spinner />
            </Box>
          ) : (
            <Typography variant="body1">
              Hmmm... I couldn't find any books with the query "{query}." Please
              try another.
            </Typography>
          ))}
      </div>
    </div>
  );
};

export default DiscoverBooksScreen;
