import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";

// Components
import CardButtons from "./CardButtons";
import CardRating from "./CardRating";

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

const formatDate = date =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "2-digit" }).format(
    date
  );

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

          <List aria-label="main mailbox folders" dense>
            <ListItem>
              <Tooltip
                title={
                  listItem.finishDate ? "Start and finish date" : "Start date"
                }
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                primary={
                  <>
                    {formatDate(listItem.startDate)}{" "}
                    {listItem.finishDate &&
                      `— ${formatDate(listItem.finishDate)}`}
                  </>
                }
                secondary={
                  listItem.finishDate ? "Start and finish date" : "Start date"
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText>
                <CardRating {...listItem} />
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="body2">{synopsis}</Typography>
        </CardContent>
        <CardButtons bookId={id} />
      </div>
    </Card>
  );
};

export default BookCardHorizontal;
