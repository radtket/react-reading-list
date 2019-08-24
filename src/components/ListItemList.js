import React from "react";
import PropTypes from "prop-types";

import { Box, Grid, Typography } from "@material-ui/core";
import { useListItemState } from "../context/list-item-context";
import BookCardVertical from "./BookCard/BookCardVertical";
import { isArrayEmpty } from "../utils/helpers";

const ListItemList = ({
  filterListItems,
  noListItems,
  noFilteredListItems,
}) => {
  const listItems = useListItemState();
  const filteredListItems = listItems.filter(filterListItems);

  if (isArrayEmpty(listItems)) {
    return (
      <Box mt={1.5}>
        <Typography gutterBottom variant="h6">
          {noListItems}
        </Typography>
      </Box>
    );
  }

  if (isArrayEmpty(filteredListItems)) {
    return (
      <Box mt={1.5}>
        <Typography gutterBottom variant="h6">
          {noFilteredListItems}
        </Typography>
      </Box>
    );
  }

  return (
    <Box mt={1.5}>
      <Grid container spacing={3}>
        {filteredListItems.map(listItem => {
          const { id } = listItem;
          return (
            <Grid key={id} item xs>
              <BookCardVertical {...listItem} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

ListItemList.propTypes = {
  filterListItems: PropTypes.func.isRequired,
  noListItems: PropTypes.node.isRequired,
  noFilteredListItems: PropTypes.node.isRequired,
};

export default ListItemList;
