import React from "react";
import {useSelector} from "react-redux";
import {Switch, Route, Redirect} from 'react-router';
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

import Header from "./containers/header";

import "./App.scss";

import StopWatch from "./containers/stopWatch/stopWatch";
import SignIn from "./containers/singIn";
import SignUp from "./containers/signUp";
import Navigation from './containers/navigation';

import {RootState} from "./redux";

const useStyles = makeStyles((theme: Theme) => createStyles({
		standart: {width: "100%",},
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
			justifyContent: "space-between",
			alignItems: "center",
			flexDirection: "column",
			height: " 94.2%",
			backgroundColor: "#b3e5fc",
		},
		navigation: {
			width: '100%',
			height: '100px',
			border: '1px solid red'
		}
	})
);

function App(props: any) {
	const classes = useStyles();
	const isAuth = useSelector((state: RootState) => state.user.isAuth);

	return (
		<Container className={classes.root} maxWidth={false}>
			<Header/>
			<main className={classes.main}>

				<Switch>
					{/* <Route path="/rules"> */}
					{/*    {!isAuth && <Rules />} */}
					{/* </Route> */}
					<Route path="/login">
						{!isAuth ? <SignIn/> : <Redirect to="/"/>
						}
					</Route>
					<Route path="/signup">
						{!isAuth ? <SignUp/> : <Redirect to="/"/>
						}
					</Route>
					<Route path="/">
						{isAuth ?
							<div className={classes.standart}>
								<Navigation/>
								<StopWatch/>
							</div>
							: <Redirect to="/login"/>}
					</Route>
				</Switch>
			</main>
		</Container>
	);
}

export default App;
