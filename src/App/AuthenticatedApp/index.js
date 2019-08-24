import React from "react";
import { Link } from "@reach/router";

// Material UI
import {
  AppBar,
  Button,
  Box,
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
  const { appBar, drawer, drawerPaper, toolbar, content } = useStyles();
  const { username } = useUser();
  const { logout } = useAuth();

  return (
    <Box display="flex">
      <AppBar className={appBar} position="fixed">
        <Toolbar>
          <Typography
            style={{
              flexGrow: 1,
            }}
            variant="h6"
          >
            {username}
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{
          paper: drawerPaper,
        }}
        className={drawer}
        variant="permanent"
      >
        <div className={toolbar} />
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
      <main className={content}>
        <div className={toolbar} />
        <Routes />
      </main>
    </Box>
  );
};

export default AuthenticatedApp;
