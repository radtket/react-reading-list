/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import {
  FaCheckCircle,
  FaPlusCircle,
  FaMinusCircle,
  FaBook,
  FaTimesCircle,
} from "react-icons/fa";

import Tooltip from "@reach/tooltip";
import Spinner from "./Spinner";
import * as colors from "../styles/colors";
import { useUser } from "../context/user-context";
import {
  useListItemDispatch,
  useSingleListItemState,
  removeListItem,
  updateListItem,
  addListItem,
} from "../context/list-item-context";
import useCallbackStatus from "../utils/use-callback-status";
import CircleButton from "../styles/CircleButton";

const TooltipButton = ({ label, highlight, onClick, icon, ...rest }) => {
  const { isPending, isRejected, error, run } = useCallbackStatus();

  const handleClick = () => {
    run(onClick());
  };

  return (
    <Tooltip label={isRejected ? error.message : label}>
      <CircleButton
        css={{
          ":hover,:focus": { color: isPending ? colors.gray80 : highlight },
        }}
        disabled={isPending}
        onClick={handleClick}
        {...rest}
      >
        {isPending ? <Spinner /> : isRejected ? <FaTimesCircle /> : icon}
      </CircleButton>
    </Tooltip>
  );
};

const StatusButtons = ({ book }) => {
  const user = useUser();
  const dispatch = useListItemDispatch();
  const listItem = useSingleListItemState({
    bookId: book.id,
  });

  const handleRemoveClick = () => {
    return removeListItem(dispatch, listItem.id);
  };

  const handleMarkAsReadClick = () => {
    return updateListItem(dispatch, listItem.id, { finishDate: Date.now() });
  };

  const handleAddClick = () => {
    return addListItem(dispatch, { ownerId: user.id, bookId: book.id });
  };

  const handleMarkAsUnreadClick = () => {
    return updateListItem(dispatch, listItem.id, { finishDate: null });
  };

  return (
    <>
      {listItem &&
        (listItem.finishDate ? (
          <TooltipButton
            highlight={colors.yellow}
            icon={<FaBook />}
            label="Unmark as read"
            onClick={handleMarkAsUnreadClick}
          />
        ) : (
          <TooltipButton
            highlight={colors.green}
            icon={<FaCheckCircle />}
            label="Mark as read"
            onClick={handleMarkAsReadClick}
          />
        ))}
      {listItem ? (
        <TooltipButton
          highlight={colors.danger}
          icon={<FaMinusCircle />}
          label="Remove from list"
          onClick={handleRemoveClick}
        />
      ) : (
        <TooltipButton
          highlight={colors.indigo}
          icon={<FaPlusCircle />}
          label="Add to list"
          onClick={handleAddClick}
        />
      )}
    </>
  );
};

export default StatusButtons;
