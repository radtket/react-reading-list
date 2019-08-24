import React, { useState } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import Tooltip from "@reach/tooltip";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useAsync } from "react-async";
import Grid from "@material-ui/core/Grid";
import * as booksClient from "../../../utils/books-client";
import Spinner from "../../../components/Spinner";
import BookCard from "../../../components/BookCard";

// import BookRow from "../../../components/BookRow";
// import BookListUL from "../../../styles/BookListUL";

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

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearchClick = e => {
    e.preventDefault();
    setHasSearched(true);
    run(query);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearchClick}>
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
        </form>

        {isRejected && (
          <div css={{ color: "red" }}>
            <p>There was an error:</p>
            <pre>{error.message}</pre>
          </div>
        )}
      </div>
      <div>
        {!hasSearched && (
          <div css={{ marginTop: 20, fontSize: "1.2em", textAlign: "center" }}>
            <p>Welcome to the discover page.</p>
            <p>Here, let me load a few books for you...</p>
            {isPending && (
              <div css={{ width: "100%", margin: "auto" }}>
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
                <BookCard {...{ book }} />
              </Grid>
            ))}
          </Grid>
        )}

        {/* {isResolved && books.length && (
          <BookListUL css={{ marginTop: 20 }}>
            {books.map(book => (
              <li key={book.id}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        )} */}

        {isResolved &&
          !books.length &&
          hasSearched &&
          (isPending ? (
            <div css={{ width: "100%", margin: "auto" }}>
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
