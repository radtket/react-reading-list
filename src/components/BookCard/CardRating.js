import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import debounceFn from "debounce-fn";
import { useAsync } from "react-async";
import {
  useListItemDispatch,
  updateListItem,
} from "../../context/list-item-context";

const updateRating = ([rating], { dispatch, listItem }) => {
  return updateListItem(dispatch, listItem.id, { rating });
};

const CardRating = ({
  book,
  bookId,
  finishDate,
  id,
  notes,
  ownerId,
  rating,
  startDate,
}) => {
  const [value, setValue] = useState(rating);
  const dispatch = useListItemDispatch();
  const { isRejected, error, run } = useAsync({
    deferFn: updateRating,
    dispatch,
    listItem: {
      book,
      bookId,
      finishDate,
      id,
      notes,
      ownerId,
      rating,
      startDate,
    },
  });

  const debouncedRun = useCallback(debounceFn(run, { wait: 300 }), []);

  return (
    <>
      <Rating
        name="simple-controlled"
        onChange={(event, newValue) => {
          setValue(newValue);
          debouncedRun(newValue);
        }}
        value={value}
      />
      {isRejected && (
        <span style={{ color: "red", fontSize: "0.7em" }}>
          <span>There was an error:</span>{" "}
          <pre
            style={{
              display: "inline-block",
              overflow: "scroll",
              margin: "0",
              marginBottom: -5,
            }}
          >
            {error.message}
          </pre>
        </span>
      )}
    </>
  );
};

CardRating.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    coverImageUrl: PropTypes.string,
    id: PropTypes.string,
    pageCount: PropTypes.number,
    publisher: PropTypes.string,
    synopsis: PropTypes.string,
  }).isRequired,
  bookId: PropTypes.string.isRequired,
  finishDate: PropTypes.number,
  id: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  startDate: PropTypes.number.isRequired,
};

CardRating.defaultProps = {
  finishDate: null,
};

export default CardRating;
