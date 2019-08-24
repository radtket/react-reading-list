import React from "react";
import PropTypes from "prop-types";
import { CardActions, IconButton, Tooltip } from "@material-ui/core";
import { Book, Check, Add, Remove } from "@material-ui/icons";

import * as colors from "../../styles/colors";
import { useUser } from "../../context/user-context";
import {
  addListItem,
  removeListItem,
  updateListItem,
  useListItemDispatch,
  useSingleListItemState,
} from "../../context/list-item-context";

const CardButtons = ({ bookId }) => {
  const user = useUser();
  const dispatch = useListItemDispatch();
  const listItem = useSingleListItemState({
    bookId,
  });

  const handleRemoveClick = () => {
    return removeListItem(dispatch, listItem.id);
  };

  const handleMarkAsReadClick = () => {
    return updateListItem(dispatch, listItem.id, { finishDate: Date.now() });
  };

  const handleAddClick = () => {
    return addListItem(dispatch, { ownerId: user.id, bookId });
  };

  const handleMarkAsUnreadClick = () => {
    return updateListItem(dispatch, listItem.id, { finishDate: null });
  };

  return (
    <CardActions>
      {listItem &&
        (listItem.finishDate ? (
          <Tooltip title="Unmark as read">
            <IconButton
              aria-label="Unmark as read"
              highlight={colors.yellow}
              onClick={handleMarkAsUnreadClick}
            >
              <Book />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Mark as read">
            <IconButton
              aria-label="Mark as read"
              highlight={colors.green}
              onClick={handleMarkAsReadClick}
            >
              <Check />
            </IconButton>
          </Tooltip>
        ))}
      {listItem ? (
        <Tooltip title="Remove from list">
          <IconButton
            aria-label="Remove from list"
            highlight={colors.danger}
            onClick={handleRemoveClick}
          >
            <Remove />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add to list">
          <IconButton
            aria-label="Add to list"
            highlight={colors.indigo}
            onClick={handleAddClick}
          >
            <Add />
          </IconButton>
        </Tooltip>
      )}
    </CardActions>
  );
};

CardButtons.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default CardButtons;
