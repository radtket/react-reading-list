import React from "react";
import PropTypes from "prop-types";
import { useAsync } from "react-async";
import { Grid, Typography } from "@material-ui/core";

import { useSingleListItemState } from "../../../context/list-item-context";
import * as bookClient from "../../../utils/books-client";

// Components
import {
  BookCardHorizontal,
  BookNotes,
  ErrorMessage,
  FullPageSpinner,
} from "../../../components";

const getBook = ({ bookId }) => {
  return bookClient.read(bookId).then(data => data.book);
};

const BookScreen = ({ bookId }) => {
  const { data: book, isPending, isRejected, isResolved, error } = useAsync({
    promiseFn: getBook,
    bookId,
  });
  const listItem = useSingleListItemState({ bookId });

  if (isPending) {
    return <FullPageSpinner />;
  }

  if (isRejected) {
    return <ErrorMessage {...{ error }} />;
  }

  if (isResolved && !book) {
    return (
      <Typography color="error" gutterBottom variant="body1">
        Hmmm... Something's not quite right. Please try another book.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <BookCardHorizontal book={book} listItem={listItem} />
      </Grid>

      <Grid item xs={6}>
        {listItem && <BookNotes {...{ listItem }} />}
      </Grid>
    </Grid>
  );
};

BookScreen.propTypes = {
  bookId: PropTypes.string,
};

BookScreen.defaultProps = {
  bookId: null,
};

export default BookScreen;
