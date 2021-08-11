import {decreaseLifeArction, updateScoreAction} from "../redux/actions/game";

export const checkWinHelper = (times: string, dispatch: any) => {
	const secondsNumber = Number(times);
	if(secondsNumber >= 90 && secondsNumber <= 95 ) {
		dispatch(decreaseLifeArction());
	}
	if(secondsNumber >= 5 && secondsNumber <= 10 ) {
		dispatch(decreaseLifeArction());
	}

	if(secondsNumber === 96) {
		dispatch(updateScoreAction(6));
	}

	if(secondsNumber === 97) {
		dispatch(updateScoreAction(7));
	}

	if(secondsNumber === 98) {
		dispatch(updateScoreAction(8));
	}

	if(secondsNumber === 99) {
		dispatch(updateScoreAction(9));
	}

	if(secondsNumber === 0) {
		dispatch(updateScoreAction(50));
	}

	if(secondsNumber === 1) {
		dispatch(updateScoreAction(9));
	}

	if(secondsNumber === 2) {
		dispatch(updateScoreAction(8));
	}

	if(secondsNumber === 3) {
		dispatch(updateScoreAction(7));
	}

	if(secondsNumber === 4) {
		dispatch(updateScoreAction(6));
	}

}
