import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import "./StopWatch.scss";
import {resetGame} from "../../redux/actions/game";

const StopWatch = () => {
	const [time, setTime] = useState<number>(0);
	const [timerOn, setTimerOn] = useState<boolean>(false);
	const dispatch = useDispatch();

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
		dispatch(resetGame());
		 setTime(0);
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
				{timerOn && <button type="button" onClick={() => setTimerOn(false)}>Stop</button>}
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
