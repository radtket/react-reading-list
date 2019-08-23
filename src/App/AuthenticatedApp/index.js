import React from "react";
import { Link } from "@reach/router";

// Material UI
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { FindInPage, LocalLibrary, PlaylistAddCheck } from "@material-ui/icons";

// Components
import { useAuth } from "../../context/auth-context";
import { useUser } from "../../context/user-context";
import Routes from "./routes";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const AuthenticatedApp = () => {
  const classes = useStyles();
  const user = useUser();
  const { logout } = useAuth();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            {user.username}
          </Typography>
          <Button color="inherit" onClick={logout}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
        variant="permanent"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button component={Link} to="/list">
            <ListItemIcon>
              <LocalLibrary />
            </ListItemIcon>
            <ListItemText primary="Reading List" />
          </ListItem>
          <ListItem button component={Link} to="/finished">
            <ListItemIcon>
              <PlaylistAddCheck />
            </ListItemIcon>
            <ListItemText primary="Finished Books" />
          </ListItem>
          <ListItem button component={Link} to="/discover">
            <ListItemIcon>
              <FindInPage />
            </ListItemIcon>
            <ListItemText primary="Discover" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes />
      </main>
    </div>
  );
};

export default AuthenticatedApp;
