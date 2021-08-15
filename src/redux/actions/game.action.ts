import axios from "axios";
import {DECREASE_LIFE, INCREASE_LIFE, RESET_GAME, UPDATE_BEST_SCORE, UPDATE_SCORE} from "../types/game.typings";
import {hostUrl} from "../../constants/api.constants";


export const resetGameAction = () => ({
	type: RESET_GAME
})

export const decreaseLifeArction = () => ({
	type: DECREASE_LIFE
})

export const increaseLifeAction = () => ({
	type: INCREASE_LIFE
})

export const updateScoreAction = (score: any) => ({
	type: UPDATE_SCORE,
	payload: score
})
export const updateBestScoreAction = (score: any) => ({
	type: UPDATE_BEST_SCORE,
	payload: score
})

export const saveScoreApi = () => async (dispatch: any, store: any) => {
	try {
		const user = store().user.currentUser
		const {score} = store().game
		 await axios.post(
		 	`${hostUrl}api/game/set/result`,
			{'score': score, user}
		);
		dispatch(resetGameAction());
	} catch (error) {
		console.log(error)
	}
}

export const getBestScoreApi = () => async (dispatch: any, store: any) => {
	try {
		const user = store().user.currentUser
		const {data} = await axios.post(`${hostUrl}api/game/score`,{user});

		dispatch(updateBestScoreAction(data.bestScore));
	} catch (error) {
		console.log(error)
	}
}
