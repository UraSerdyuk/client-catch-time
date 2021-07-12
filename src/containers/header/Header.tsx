/*eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { RootState } from "../../redux";
import { logout } from "../../redux/reducers/userReducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Catch Time
          </Typography>

          {!isAuth && <Button color="inherit">Login</Button>}
          {!isAuth && <Button color="inherit">Registration</Button>}
          {isAuth && (
            <Button color="inherit" onClick={() => dispatch(logout())}>
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
