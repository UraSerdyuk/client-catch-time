import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {RootState} from "../../redux";
import {getBestScoreApi} from "../../redux/actions/game.action";

const useStyles = makeStyles((theme: Theme) => createStyles({
		navigation: {
			width: '100%',
			height: '100px',
			display: 'flex',
			justifyContent: 'space-between',
			paddingRight: '50px'
		},
		informationMenu: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around'
		},
		bestScore: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			paddingLeft: '50px'
		}
	})
	)
;

const Navigation = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const {live, score, bestScore} = useSelector((state: RootState) => state.game);

	useEffect(()=>{
	setTimeout(()=>{	dispatch(getBestScoreApi())},50);
	},[])

	const arr = (new Array(live)).fill(1).map((a, i) => i)


	return <div className={classes.navigation}>
		<div className={classes.bestScore}>
			Your best score:{bestScore}
		</div>
		<div className={classes.informationMenu}>
			<div>
				{arr.map(() => <FavoriteIcon/>)}
			</div>
			<div>
				<span>Score</span>: {score}
			</div>
		</div>
	</div>
}

export default Navigation;
