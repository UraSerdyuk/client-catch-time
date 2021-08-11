import React from 'react';
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';

import {RootState} from "../../redux";
import {resetGameAction} from "../../redux/actions/game";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		width:'100%',
		height: '92vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: "start",
		paddingTop: "20%",
	},
	root: {
		width: "500px",
		height: "200px",
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: "center"
	},
	button: {
		width: '200px'
	}
}));

export const GameOverPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const {live, score} = useSelector((state: RootState) => state.game);

	const handleResetGame = () => {
		dispatch(resetGameAction());
	}

	return <div className={classes.wrapper}>
			<div className={classes.root}>
				<p>Game over</p>
				<span>Your score: {score}</span>
				<Button variant="contained" color="primary" className={classes.button} onClick={handleResetGame}>
					Try Again
				</Button>
			</div>
	</div>
};
