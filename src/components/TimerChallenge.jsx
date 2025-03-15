import { useState, useRef, useEffect } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeLeft] = useState(targetTime * 1000);

  useEffect(() => {
    if (timeRemaining <= 0 && timerStart) {
      setTimerExpired(true);
      clearInterval(timer.current);
      dialog.current.open();
    }
  }, [timeRemaining, timerStart]);

  function handleStart() {
    setTimerStart(true);
    setTimerExpired(false);
    setTimeLeft(targetTime * 1000);
    
    timer.current = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    setTimerStart(false);
    dialog.current.open();
  }

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} result={timerExpired ? "lost" : "win"} timeRemaining={(timeRemaining / 1000).toFixed(1)} />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerStart ? handleStop : handleStart}>
            {timerStart ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerStart ? "active" : undefined}>
          {timerStart ? "Time is running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
