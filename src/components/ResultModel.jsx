import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel({ result, targetTime, timeRemaining }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));

  return (
    <dialog ref={dialog} className="result-model">
      <h2>You {result}</h2>
      <p>
        Target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        You stopped the timer with <strong>{timeRemaining}</strong> seconds left
      </p>
      <form method="dialog">
        <button type="submit">Close</button>
      </form>
    </dialog>
  );
});

export default ResultModel;
