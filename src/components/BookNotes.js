import React, { useCallback } from "react";
import { useAsync } from "react-async";
import debounceFn from "debounce-fn";
import TextField from "@material-ui/core/TextField";
import Spinner from "./Spinner";
import {
  useListItemDispatch,
  updateListItem,
} from "../context/list-item-context";
import ErrorMessage from "./ErrorMessage";

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

export default BookNotes;
