import { useState , useRef } from "react"
import ResultModel from "./ResultModel.jsx";



export default function TimerChallenge({title, targetTime}){
    const [timerStart, setTimerStart] = useState();
    const [timerExpired, setTimerExpired] = useState();

    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        timer.current = setTimeout(()=>{
            dialog.current.showModal();
            setTimerExpired(true)
        },1000 * targetTime);

        setTimerStart(true);
    }

    function handleStop(){
        clearTimeout(timer.current)
    }

    return(
        <>
            {timerExpired && <ResultModel ref={dialog} targetTime={targetTime} result="win"/>}
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStart ? handleStop : handleStart}>
                        {timerStart ? 'stop' :'Start'} Challenge
                    </button>
                </p>
                <p className={timerStart ? "active" : undefined}>
                {timerStart ? "Time is running" : "Timer is inactive"}
                </p>
            </section>
        </>
        
    )
}