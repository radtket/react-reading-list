import React, { useState } from "react";
import { useAsync } from "react-async";
import Grid from "@material-ui/core/Grid";
import * as booksClient from "../../../utils/books-client";
import Spinner from "../../../components/Spinner";
import BookCardVertical from "../../../components/BookCard/BookCardVertical";
import SearchBar from "../../../components/SearchBar";

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

  console.log({ query });

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
          <div
            style={{ marginTop: 20, fontSize: "1.2em", textAlign: "center" }}
          >
            <p>Welcome to the discover page.</p>
            <p>Here, let me load a few books for you...</p>
            {isPending && (
              <div style={{ width: "100%", margin: "auto" }}>
                <Spinner />
              </div>
            )}

            {isResolved &&
              (books.length ? (
                <p>Here you go! Find more books with the search bar above.</p>
              ) : (
                <p>
                  Hmmm... I couldn't find any books to suggest for you. Sorry.
                </p>
              ))}
          </div>
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
            <div style={{ width: "100%", margin: "auto" }}>
              <Spinner />
            </div>
          ) : (
            <p>
              Hmmm... I couldn't find any books with the query "{query}." Please
              try another.
            </p>
          ))}
      </div>
    </div>
  );
};

export default DiscoverBooksScreen;
