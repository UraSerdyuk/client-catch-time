import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./StopWatch.scss";
import {decreaseLifeArction, resetGameAction, updateScoreAction} from "../../redux/actions/game";
import useKeyPress from "../../hooks/useKeyPress";
import {RootState} from "../../redux";



const StopWatch = () => {
	const [time, setTime] = useState<number>(0);
	const [timerOn, setTimerOn] = useState<boolean>(false);
	const dispatch = useDispatch();
	const {live,score} = useSelector((state: RootState) => state.game);

	const spacePress: boolean = useKeyPress(" ");

	useEffect(()=>{

		if(spacePress) {
			console.log('spacePress',spacePress);
			if(timerOn) {
				setTimerOn(false)
			}else {
				setTimerOn(true)
			}
		}
		// spacePress && timerOn ? handleStop() : setTimerOn(true) ;

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
		dispatch(updateScoreAction(100));
		 setTime(0);
	}

	const handleStop = () => {
		live &&	dispatch(decreaseLifeArction());
		 setTimerOn(false);
	}

	return (
		<div className="Timers">
			{/* <h2>Stopwatch</h2> */}
			<div id="display">
				<span>{(`0${Math.floor((time / 60000) % 60)}`).slice(-2)}:</span>
				<span>{(`0${Math.floor((time / 1000) % 60)}`).slice(-2)}:</span>
				<span>{(`0${(time / 10) % 100}`).slice(-2)}</span>
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
