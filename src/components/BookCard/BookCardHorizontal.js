import React from "react";
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

const useStyles = makeStyles(theme => ({
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

const BookCardHorizontal = ({
  title,
  author,
  coverImageUrl,
  publisher,
  synopsis,
  id,
  listItem,
}) => {
  const classes = useStyles();
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

export default BookCardHorizontal;
