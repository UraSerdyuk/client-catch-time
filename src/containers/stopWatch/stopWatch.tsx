import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./StopWatch.scss";
import {decreaseLifeArction, resetGameAction, updateScoreAction} from "../../redux/actions/game.action";
import useKeyPress from "../../hooks/useKeyPress";
import {RootState} from "../../redux";
import {checkWinHelper} from "../../helpers/checkWin.helper";



const StopWatch = () => {
	const [time, setTime] = useState<number>(0);
	const [timerOn, setTimerOn] = useState<boolean>(false);
	const dispatch = useDispatch();
	const {live,score} = useSelector((state: RootState) => state.game);

	const spacePress: boolean = useKeyPress(" ");
	const hours = (`0${Math.floor((time / 60000) % 60)}`).slice(-2);
	const minutes = (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
	const seconds = (`0${(time / 10) % 100}`).slice(-2);

	useEffect(()=>{

		if(spacePress) {
			if(timerOn) {
				checkWinHelper(seconds,dispatch);
				setTimerOn(false)
			}else {
				setTimerOn(true)
			}
		}
	},[spacePress]);

	useEffect(() => {
		let interval: any = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!timerOn) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	const handleReset = () => {
		dispatch(resetGameAction());
		dispatch(updateScoreAction(0));
		 setTime(0);
	}

	const handleStop = () => {
		checkWinHelper(seconds,dispatch);
		 setTimerOn(false);
	}

	return (
		<div className="Timers">
			{/* <h2>Stopwatch</h2> */}
			<div id="display">
				<span className={"timer__hours"}>{hours}:</span>
				<span className={"timer__minutes"}>{minutes}:</span>
				<span className={"timer__seconds"}>{`${seconds}`.split('')}</span>
			</div>

			<div id="buttons">
				{!timerOn && time === 0 && (
					<button type="button" onClick={() => setTimerOn(true)}>Start</button>
				)}
				{timerOn && <button type="button" onClick={handleStop}>Stop</button>}
				{!timerOn && time > 0 && (
					<button type="button" className='reset-button' onClick={handleReset}>Reset</button>
				)}
				{!timerOn && time > 0 && (
					<button  type="button" onClick={() => setTimerOn(true)}>Resume</button>
				)}
			</div>
		</div>
	);
};

export default StopWatch;
