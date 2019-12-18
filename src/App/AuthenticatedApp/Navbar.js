import React from "react";
import { Link } from "@reach/router";

// Material UI
import {
  AppBar,
  Button,
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
import ToolbarMixin from "../../components/ToolbarMixin";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
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
}));

const Navbar = () => {
  const { appBar, drawer, drawerPaper } = useStyles();
  const { username } = useUser();
  const { logout } = useAuth();

  return (
    <>
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
        <ToolbarMixin />

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
    </>
  );
};

export default Navbar;
