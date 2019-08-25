import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useAsync } from "react-async";
import debounceFn from "debounce-fn";
import TextField from "@material-ui/core/TextField";
import Spinner from "./Spinner";
import {
  useListItemDispatch,
  updateListItem,
} from "../context/list-item-context";
import ErrorMessage from "./ErrorMessage";
import { PropTypesBook } from "../types";

const updateNotes = ([notes], { dispatch, listItem }) => {
  return updateListItem(dispatch, listItem.id, { notes });
};

const BookNotes = ({ listItem }) => {
  const { notes } = listItem;
  const dispatch = useListItemDispatch();
  const { isPending, isRejected, error, run } = useAsync({
    deferFn: updateNotes,
    dispatch,
    listItem,
  });
  const debouncedRun = useCallback(debounceFn(run, { wait: 300 }), []);

  const handleNotesChange = ({ target }) => {
    debouncedRun(target.value);
  };

  if (isRejected) {
    return <ErrorMessage {...{ error }} />;
  }

  if (isPending) {
    return <Spinner />;
  }

  return (
    <TextField
      defaultValue={notes}
      fullWidth
      id="notes"
      label="Notes"
      multiline
      onChange={handleNotesChange}
      rows="6"
      variant="filled"
    />
  );
};

BookNotes.propTypes = {
  listItem: PropTypes.shape({
    book: PropTypesBook.isRequired,
    bookId: PropTypes.string.isRequired,
    finishDate: PropTypes.number,
    id: PropTypes.string.isRequired,
    notes: PropTypes.string,
    ownerId: PropTypes.string.isRequired,
    rating: PropTypes.number,
    startDate: PropTypes.number,
  }),
};

BookNotes.defaultProps = {
  listItem: {
    finishDate: null,
    notes: "",
    rating: null,
    startDate: null,
  },
};

export default BookNotes;
