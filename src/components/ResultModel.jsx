export default function ResultModel({ref, result, targetTime}){
    return (
        <dialog ref={ref} className="result-model">
            <h2>You {result}</h2>
            <p>
                Target time was <strong>{targetTime}</strong> seconds
            </p>
            <p>
                You stopped the timer with <strong></strong> seconds left
            </p>
            <form method="dialog">

            </form>
        </dialog>
    )
}