import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Header from "./containers/header";

import "./App.scss";

import StopWatch from "./containers/stopWatch/stopWatch";
import SignIn from "./containers/singIn";
import SignUp from "./containers/signUp";
import {useSelector} from "react-redux";
import {RootState} from "./redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100vh",
      textAlign: "center",
      padding: "0 !important",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: " 92.2%",
      backgroundColor: "#b3e5fc",
    },
  })
);

function App() {
  const classes = useStyles();
  const isAuth = useSelector((state:RootState) => state.user.isAuth);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Header />
      <main className={classes.main}>
          {isAuth && <StopWatch />}
          {!isAuth && <SignUp />}
          {!isAuth && <SignIn />}
      </main>
    </Container>
  );
}

export default App;
