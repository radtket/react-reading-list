import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";

// Components
import CardRating from "./CardRating";

const formatDate = date =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "2-digit" }).format(
    date
  );

const BookCardList = ({ listItem }) => {
  const { finishDate, startDate } = listItem;
  return (
    <List aria-label="main mailbox folders" dense>
      <ListItem>
        <Tooltip title={finishDate ? "Start and finish date" : "Start date"}>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
        </Tooltip>
        <ListItemText
          primary={
            <>
              {formatDate(startDate)}{" "}
              {finishDate && `— ${formatDate(finishDate)}`}
            </>
          }
          secondary={finishDate ? "Start and finish date" : "Start date"}
        />
      </ListItem>
      <ListItem>
        <ListItemText>
          <CardRating {...listItem} />
        </ListItemText>
      </ListItem>
    </List>
  );
};

BookCardList.propTypes = {
  listItem: PropTypes.shape({
    finishDate: PropTypes.number,
    startDate: PropTypes.number,
  }),
};

BookCardList.defaultProps = {
  listItem: {
    finishDate: null,
    startDate: null,
  },
};

export default BookCardList;
