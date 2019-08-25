import React from "react";
import { Link } from "@reach/router";

// Material UI
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

// Components
import { useSingleListItemState } from "../../context/list-item-context";
import CardRating from "./CardRating";
import CardButtons from "./CardButtons";
import { PropTypesBook } from "../../types";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const BookCardVertical = ({ book }) => {
  const {
    author,
    coverImageUrl,
    id: bookId,
    // pageCount,
    // publisher,
    synopsis,
    title,
  } = book;

  const classes = useStyles();
  const listItem = useSingleListItemState({
    bookId,
  });
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component={Link}
          image={coverImageUrl}
          title="Contemplative Reptile"
          to={`/book/${bookId}`}
        />
        <CardContent>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {author}
          </Typography>
          {listItem && <CardRating {...listItem} />}
          <Typography color="textSecondary" component="p" variant="body2">
            {synopsis.substring(0, 500)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardButtons {...{ bookId }} />
    </Card>
  );
};

BookCardVertical.propTypes = {
  book: PropTypesBook.isRequired,
};

export default BookCardVertical;
