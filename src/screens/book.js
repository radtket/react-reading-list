/** @jsx jsx */
import { jsx } from "@emotion/core";

import React from "react";
import { useAsync } from "react-async";
import debounceFn from "debounce-fn";
import { FaRegCalendarAlt } from "react-icons/fa";
import Tooltip from "@reach/tooltip";
import * as mq from "../styles/media-queries";
import * as colors from "../styles/colors";
import { Spinner } from "../components/lib";
import {
  useListItemDispatch,
  useSingleListItemState,
  updateListItem,
} from "../context/list-item-context";
import Rating from "../components/rating";
import * as bookClient from "../utils/books-client";
import StatusButtons from "../components/status-buttons";

function getBook({ bookId }) {
  return bookClient.read(bookId).then(data => data.book);
}

const formatDate = date =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "2-digit" }).format(
    date
  );

function BookScreen({ bookId }) {
  const { data: book, isPending, isRejected, isResolved, error } = useAsync({
    promiseFn: getBook,
    bookId,
  });
  const listItem = useSingleListItemState({ bookId });

  if (isPending) {
    return (
      <div css={{ marginTop: "2em", fontSize: "2em", textAlign: "center" }}>
        <Spinner />
      </div>
    );
  }
  if (isRejected) {
    return (
      <div css={{ color: "red" }}>
        <p>Oh no, there was an error.</p>
        <pre>{error.message}</pre>
      </div>
    );
  }

  if (isResolved && !book) {
    return (
      <div css={{ color: "red" }}>
        <p>Hmmm... Something's not quite right. Please try another book.</p>
      </div>
    );
  }

  const { title, author, coverImageUrl, publisher, synopsis } = book;

  return (
    <div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gridGap: "2em",
          marginBottom: "1em",
          [mq.small]: {
            display: "flex",
            flexDirection: "column",
          },
        }}>
        <img
          alt={`${title} book cover`}
          css={{
            width: "100%",
            maxWidth: 200,
          }}
          src={coverImageUrl}
        />
        <div>
          <div css={{ display: "flex", position: "relative" }}>
            <div css={{ flex: 1, justifyContent: "space-between" }}>
              <h1>{title}</h1>
              <div>
                <i>{author}</i>
                <span css={{ marginRight: 6, marginLeft: 6 }}>|</span>
                <i>{publisher}</i>
              </div>
            </div>
            <div
              css={{
                right: 0,
                color: colors.gray80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                minHeight: 100,
              }}>
              <StatusButtons book={book} />
            </div>
          </div>
          <div css={{ marginTop: 10, height: 46 }}>
            {listItem ? (
              <React.Fragment>
                <Rating listItem={listItem} />
                <Tooltip
                  label={
                    listItem.finishDate ? "Start and finish date" : "Start date"
                  }>
                  <div css={{ marginTop: 6 }}>
                    <FaRegCalendarAlt css={{ marginTop: -2, marginRight: 5 }} />
                    <span>
                      {formatDate(listItem.startDate)}{" "}
                      {listItem.finishDate
                        ? `— ${formatDate(listItem.finishDate)}`
                        : null}
                    </span>
                  </div>
                </Tooltip>
              </React.Fragment>
            ) : null}
          </div>
          <br />
          <p>{synopsis}</p>
        </div>
      </div>
      {listItem ? <NotesTextarea listItem={listItem} /> : null}
    </div>
  );
}

function updateNotes([notes], { dispatch, listItem }) {
  return updateListItem(dispatch, listItem.id, { notes });
}

function NotesTextarea({ listItem }) {
  const dispatch = useListItemDispatch();
  const { isPending, isRejected, error, run } = useAsync({
    deferFn: updateNotes,
    dispatch,
    listItem,
  });
  const debouncedRun = React.useCallback(debounceFn(run, { wait: 300 }), []);
  function handleNotesChange(e) {
    debouncedRun(e.target.value);
  }

  return (
    <React.Fragment>
      <div>
        <label
          css={{
            display: "inline-block",
            marginRight: 10,
            marginTop: "0",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
          htmlFor="notes">
          Notes
        </label>
        {isRejected ? (
          <span css={{ color: "red", fontSize: "0.7em" }}>
            <span>There was an error:</span>{" "}
            <pre
              css={{
                display: "inline-block",
                overflow: "scroll",
                margin: "0",
                marginBottom: -5,
              }}>
              {error.message}
            </pre>
          </span>
        ) : null}
        {isPending ? <Spinner /> : null}
      </div>
      <textarea
        css={{ width: "100%", minHeight: 300 }}
        defaultValue={listItem.notes}
        id="notes"
        onChange={handleNotesChange}
      />
    </React.Fragment>
  );
}

export default BookScreen;
