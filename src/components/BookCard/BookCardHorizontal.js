import React from "react";
// import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

// Components
import CardButtons from "./CardButtons";
import BookCardList from "./BookCardList";
import { PropTypesBook } from "../../types";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
  },
}));

const BookCardHorizontal = ({ book, listItem }) => {
  const classes = useStyles();
  const {
    author,
    coverImageUrl,
    id,
    // listItem,
    publisher,
    synopsis,
    title,
  } = book;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={coverImageUrl}
        title={`${title} book cover`}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            {author}
            <Box component="span" mx={1}>
              |
            </Box>
            {publisher}
          </Typography>

          {listItem && <BookCardList listItem={listItem} />}

          <Typography variant="body2">{synopsis}</Typography>
        </CardContent>
        <CardButtons bookId={id} />
      </div>
    </Card>
  );
};

BookCardHorizontal.propTypes = {
  book: PropTypesBook.isRequired,
  // listItem: PropTypes.shape({
  //   book: PropTypesBook,
  //   bookId: PropTypes.shape,
  //   finishDate: PropTypes.number,
  //   id: PropTypes.shape,
  //   notes: PropTypes.shape,
  //   ownerId: PropTypes.shape,
  //   rating: PropTypes.number,
  //   startDate: PropTypes.number,
  // }).isRequired,
};

export default BookCardHorizontal;
