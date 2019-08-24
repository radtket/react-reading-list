import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Components
import { useSingleListItemState } from "../../context/list-item-context";
import CardRating from "./CardRating";
import CardButtons from "./CardButtons";

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const BookCard = ({ book }) => {
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

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    author: PropTypes.string,
    coverImageUrl: PropTypes.string,
    id: PropTypes.string,
    pageCount: PropTypes.number,
    publisher: PropTypes.string,
    synopsis: PropTypes.string,
  }).isRequired,
};

export default BookCard;