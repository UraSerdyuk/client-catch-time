import React from "react";
import {useSelector} from "react-redux";

import FavoriteIcon from "@material-ui/icons/Favorite";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {RootState} from "../../redux";

const useStyles = makeStyles((theme: Theme) => createStyles({
		navigation: {
			width: '100%',
			height: '100px',
			display: 'flex',
			justifyContent: 'flex-end',
			paddingRight:'50px'
		},
	informationMenu: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around'
	}
	})
);

const Navigation = () =>{
	const classes = useStyles();
	const {live,score} = useSelector((state: RootState) => state.game);

	const arr =  (new Array(live)).fill(1).map((a,i)=>i)


	return 	<div className={classes.navigation}>
	<div className={classes.informationMenu}>
		<div>
			{arr.map(()=> <FavoriteIcon/>)}
		</div>
		<div>
			<span >Score</span>: 0
		</div>
	</div>
	</div>
}

export  default  Navigation;
