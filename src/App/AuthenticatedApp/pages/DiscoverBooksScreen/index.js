import React, { useState } from "react";
import { useAsync } from "react-async";
import { Grid } from "@material-ui/core";
import { search } from "../../../../utils/books-client";

// Components
import {
  BookCardVertical,
  // ErrorMessage,
  SearchBar,
} from "../../../../components";
import { isArrayEmpty } from "../../../../utils/helpers";

// SubComponents
import NotSearched from "./NotSearched";
import HasSearched from "./HasSearched";

const initialSearch = () => search("");

const DiscoverBooksScreen = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState();
  const { data, isPending, isRejected, isResolved, error, run } = useAsync({
    promiseFn: initialSearch,
    deferFn: search,
  });

  const handleInputChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSearchClick = e => {
    e.preventDefault();
    setHasSearched(true);
    run(query);
  };

  const { books } = data || { books: [] };

  const noBooksFound = isArrayEmpty(books);

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
          <NotSearched {...{ isPending, isResolved, noBooksFound }} />
        )}

        {isResolved && (
          <>
            {!noBooksFound && (
              <Grid container spacing={3}>
                {books.map(book => (
                  <Grid key={book.id} item xs={3}>
                    <BookCardVertical {...{ book }} />
                  </Grid>
                ))}
              </Grid>
            )}
            {noBooksFound && hasSearched && (
              <HasSearched {...{ isPending, query }} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DiscoverBooksScreen;
