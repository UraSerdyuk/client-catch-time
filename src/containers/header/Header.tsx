/*eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as ReactLink } from 'react-router-dom';
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
      body2: {
          textTransform: 'uppercase',
          fontSize:' 0.875rem',
          letterSpacing: '0.02857em',
          textDecoration: 'none',
          color: 'white',
          fontFamily: "Roboto, Helvetica, Arial, sansSerif",
          fontWeight: 500,
          marginLeft:'30px'
      }
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

          {!isAuth &&
          <ReactLink to='/login' className={classes.body2}>
              {"Login"}
          </ReactLink>
          }
          {!isAuth &&
          <ReactLink to='/signup' className={classes.body2}>
              {"Registration"}
          </ReactLink>
          }
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
