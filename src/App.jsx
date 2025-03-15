import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Easy" targetTime={5}/>
        <TimerChallenge title="Medium" targetTime={10}/>
        <TimerChallenge title="Medium" targetTime={30}/>
        <TimerChallenge title="Hard" targetTime={60}/>
        <TimerChallenge title="Hard" targetTime={300}/>
      </div>
    </>
  );
}

export default App;
